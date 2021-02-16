import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:gender')
  async getUsers(): Promise<void> {
    // get data from the api
    const randomUsers = await this.usersService.getUsers('abc', 20, 1)
    // filter data if needed
    // parse data as spected
    // return parsed data
  }
}
