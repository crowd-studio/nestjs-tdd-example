import { range } from 'lodash'
import * as faker from 'faker'
import { RandomUsers } from '../users/dto/randomUsers.dto'

export default (seed: string, results: number, page: number): Promise<RandomUsers> =>
  Promise.resolve({
    results: range(results).map(() => ({
      gender: faker.random.arrayElement(['male', 'female']),
      name: {
        title: faker.name.prefix(),
        first: faker.name.firstName(),
        last: faker.name.lastName(),
      },
      nat: faker.random.locale().toUpperCase(),
    })),
    info: {
      seed,
      results,
      page,
      version: '1.3',
    },
  })
