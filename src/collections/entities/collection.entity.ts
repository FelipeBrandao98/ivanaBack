import { ApiProperty } from '@nestjs/swagger'
import { Collection } from '@prisma/client'

import { ImagesEntity } from 'src/images/entities/image.entity'
import { CollectionsCategoryEntity } from '../subroutes/collections-category/entities/collections-category.entity'

export class CollectionEntity implements Collection {
  constructor(partial: Partial<CollectionEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ required: true })
  id: number

  @ApiProperty({ required: true })
  title: string

  @ApiProperty({ required: false, nullable: true })
  titleDe: string | null

  @ApiProperty({ required: false, nullable: true })
  titleEn: string | null

  @ApiProperty({ required: false, nullable: true })
  titleFr: string | null

  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: false, nullable: true })
  descriptionDe: string | null

  @ApiProperty({ required: false, nullable: true })
  descriptionEn: string | null

  @ApiProperty({ required: false, nullable: true })
  descriptionFr: string | null

  @ApiProperty({ required: false })
  categoryId: number

  @ApiProperty({ required: false, type: CollectionsCategoryEntity })
  category: CollectionsCategoryEntity

  @ApiProperty({ required: false })
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover: ImagesEntity

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
}
