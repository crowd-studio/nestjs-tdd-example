export interface IUser {
  gender: string
  name: IName
  nat: string
}
export interface IName {
  title: string
  first: string
  last: string
}
export interface IInfo {
  seed: string
  results: number
  page: number
  version: string
}
export class RandomUsers {
  results: IUser[]
  info: IInfo
}
