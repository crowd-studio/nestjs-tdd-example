import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import Ajv, { DefinedError } from 'ajv'
import { AppModule } from '../app.module'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import apiMock from '../utils/apiMock'

describe('UsersController', () => {
  let app: INestApplication
  let controller: UsersController
  let service: UsersService
  const ajv = new Ajv()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    controller = module.get<UsersController>(UsersController)
    service = module.get<UsersService>(UsersService)

    jest.spyOn(service, 'getUsers').mockImplementation(apiMock)

    app = module.createNestApplication()
    await app.init()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return 20 elements by default', async (done) => {
    request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(20)
        done()
      })
  })

  it('should return less than 20', async (done) => {
    request(app.getHttpServer())
      .get('/users/female')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBeLessThan(20)
        done()
      })
  })

  it('shoud return object schema', async (done) => {
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'object',
            properties: {
              first: { type: 'string' },
              last: { type: 'string' },
            },
          },
          nat: { type: 'string' },
        },
      },
    }
    const validate = ajv.compile(schema)
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .then((response) => {
        const valid = validate(response.body)
        if (!valid) {
          console.log(response.body)
          for (const err of validate.errors as DefinedError[]) {
            console.log(err)
          }
        }
        expect(valid).toBeTruthy()
        done()
      })
  })
})
