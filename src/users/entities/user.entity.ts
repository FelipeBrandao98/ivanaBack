// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { User } from '@prisma/client'

import { Exclude } from 'class-transformer'

// class declaration
export class UserEntity implements User {
  // Properties
  @ApiProperty({ required: false, type: 'uuid', uniqueItems: true })
  id: string

  @ApiProperty({ required: true, type: 'Full Name' })
  name: string

  @ApiProperty({ required: true, type: 'e-mail', uniqueItems: true })
  email: string

  @Exclude()
  password: string

  @ApiProperty({ required: true })
  birthDate: Date

  @ApiProperty({ required: true, type: Date })
  createdAt: Date

  @ApiProperty({ required: true, type: Date })
  updatedAt: Date
  //

  // Constructor Method
  constructor(partial: Partial<UserEntity[] | UserEntity>) {
    Object.assign(this, partial)
  }
  //
}
