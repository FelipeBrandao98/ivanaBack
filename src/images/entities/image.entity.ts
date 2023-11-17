// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { Image } from '@prisma/client'

// Class declaration
export class ImagesEntity implements Image {
  // Properties
  @ApiProperty()
  id: number

  @ApiProperty()
  src: string

  @ApiProperty()
  url: string

  @ApiProperty({ required: false })
  author: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
  //

  // Constructor Method
  constructor(partial: Partial<ImagesEntity>) {
    Object.assign(this, partial)
  }
  //
}
