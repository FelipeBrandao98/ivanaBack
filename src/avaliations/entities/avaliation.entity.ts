import { ApiProperty } from '@nestjs/swagger'
import { Avaliation } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class AvaliationEntity implements Avaliation {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  avaliation: number

  @ApiProperty()
  description: string

  @ApiProperty()
  likes: number

  @ApiProperty()
  isActive: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  image: ImagesEntity

  @ApiProperty()
  imageId: number
}
