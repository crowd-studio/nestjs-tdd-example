import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import apiMock from '../utils/apiMock'

describe('UsersService', () => {
  let service: UsersService
  let mockGetUsers

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile()

    service = module.get<UsersService>(UsersService)

    mockGetUsers = jest.spyOn(service, 'getUsers')
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('(mock) should return an array', async (done) => {
    mockGetUsers.mockImplementation(apiMock)
    const users = await service.getUsers('abc', 20, 1)
    expect(users.results.length).toEqual(20)
    done()
  })

  it('(mock) should return an female', async (done) => {
    mockGetUsers.mockImplementation(apiMock)
    const users = await service.getUsers('abc', 20, 1)
    expect(users.results).toEqual(
      expect.arrayContaining([expect.objectContaining({ gender: 'female' })]),
    )
    done()
  })

  it('should return an array', async (done) => {
    mockGetUsers.mockRestore()
    const users = await service.getUsers('abc', 20, 1)
    expect(users.results.length).toEqual(20)
    done()
  })

  it('(mock) should not return male users', async (done) => {
    mockGetUsers.mockImplementation(apiMock)
    let users = await service.getUsers('abc', 20, 1)
    users = service.filterUsers(users, 'female')
    expect(users.results).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ gender: 'male' })]),
    )
    done()
  })
})
