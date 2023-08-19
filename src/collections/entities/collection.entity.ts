import { ApiProperty } from '@nestjs/swagger'
import { Collection } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class CollectionEntity implements Collection {
  @ApiProperty({ required: true })
  id: number

  @ApiProperty({ required: true })
  title: string

  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: false })
  categoryId: number

  @ApiProperty({ required: false })
  coverId: number

  @ApiProperty({ required: false })
  cover: ImagesEntity

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
}
