// NestJs imports
import { Exclude } from 'class-transformer'

// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { Collection } from '@prisma/client'

// Entities imports
import { ImagesEntity } from 'src/images/entities/image.entity'
import { CollectionsCategoryEntity } from '../subroutes/collections-category/entities/collections-category.entity'

// Class declaration
export class CollectionEntity implements Collection {
  // Properties
  @ApiProperty({ required: true, type: 'number' })
  id: number

  @ApiProperty({ required: true })
  title: string

  @ApiProperty({ required: true })
  titleDe: string

  @ApiProperty({ required: true })
  titleEn: string

  @ApiProperty({ required: true })
  titleFr: string

  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: true })
  descriptionDe: string

  @ApiProperty({ required: true })
  descriptionEn: string

  @ApiProperty({ required: true })
  descriptionFr: string

  @Exclude()
  categoryId: number

  @ApiProperty({ required: false, type: CollectionsCategoryEntity })
  category?: CollectionsCategoryEntity

  @Exclude()
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover?: ImagesEntity

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
  //

  // Constructor Method
  constructor({ category, cover, ...data }: Partial<CollectionEntity>) {
    Object.assign(this, data)

    if (category) {
      this.category = new CollectionsCategoryEntity(category)
    }

    if (cover) {
      this.cover = new ImagesEntity(cover)
    }
  }
  //
}
