import { ApiProperty } from '@nestjs/swagger'
import { Image } from '@prisma/client'

export class ImagesEntity implements Image {
  @ApiProperty()
  id: number

  @ApiProperty()
  src: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
