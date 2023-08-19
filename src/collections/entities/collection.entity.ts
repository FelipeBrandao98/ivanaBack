import { ApiProperty } from '@nestjs/swagger'
import { Collection } from '@prisma/client'
import { CollectiosCategoryEntity } from 'src/collectios-category/entities/collectios-category.entity'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class CollectionEntity implements Collection {
  constructor(partial: Partial<CollectionEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ required: true })
  id: number

  @ApiProperty({ required: true })
  title: string

  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: false })
  categoryId: number

  @ApiProperty({ required: false, type: CollectiosCategoryEntity })
  category: CollectiosCategoryEntity

  @ApiProperty({ required: false })
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover: ImagesEntity

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
}
