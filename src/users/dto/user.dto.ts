import { IUser } from './randomUsers.dto'

export interface IName {
  first: string
  last: string
}

export class UserDto {
  name: IName
  nat: string
  constructor(user: IUser) {
    this.name = {
      first: user.name.first,
      last: user.name.last,
    }
    this.nat = user.nat
  }
}
