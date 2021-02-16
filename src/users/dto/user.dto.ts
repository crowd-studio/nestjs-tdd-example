export interface IName {
  first: string
  last: string
}

export class UserDto {
  name: IName
  nat: string
}
