import { User } from '@prisma/client'

export class UserEntity implements User {
  id: string
  name: string
  email: string
  password: string
  birthDate: Date
  createdAt: Date
  updatedAt: Date
}
