import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { RandomUsers } from './dto/randomUsers.dto'

@Injectable()
export class UsersService {
  async getUsers(seed: string, results: number, page: number): Promise<RandomUsers> {
    try {
      const { data } = await axios.get(
        `https://randomuser.me/api/?inc=gender,name,nat&page=${page}&results=${results}&seed=${seed}`,
      )
      return data
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
}
