import { Controller, Get, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { IUser } from './dto/randomUsers.dto'
import { UserDto } from './dto/user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':gender?')
  async getUsers(@Param('gender') gender: string): Promise<UserDto[]> {
    // get data from the api
    let randomUsers = await this.usersService.getUsers('abc', 20, 1)
    // filter data if needed
    if (gender) {
      randomUsers = this.usersService.filterUsers(randomUsers, gender)
    }
    // parse data as spected
    const parsed = randomUsers.results.map((user: IUser): UserDto => new UserDto(user))
    // return parsed data
    return parsed
  }
}
