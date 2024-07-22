import type { Location, Tag, Restaurant } from './index'

export interface User {
  _id?: string
  username: string
  email: string
  password: string
  locale: string
  location: Location
  preferedTags?: Tag[]
  favorites?: Restaurant[]
  avatar: string
}

export type UserForm = Partial<User>
export interface SigninForm {
  email: string
  password: string
}
