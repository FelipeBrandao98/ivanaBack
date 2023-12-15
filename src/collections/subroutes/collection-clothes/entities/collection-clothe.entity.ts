// NestJs imports
import { Exclude } from 'class-transformer'

// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { CollectionClothes } from '@prisma/client'

// Entities imports
import { CollectionEntity } from 'src/collections/entities/collection.entity'
import { ImagesEntity } from 'src/images/entities/image.entity'

// Class declaration
export class CollectionClothesEntity implements CollectionClothes {
  // Properties
  @ApiProperty()
  id: number

  @ApiProperty()
  likes: number

  @ApiProperty()
  isProduct: boolean

  @ApiProperty()
  name: string

  @ApiProperty()
  nameDe: string

  @ApiProperty()
  nameFr: string

  @ApiProperty()
  nameEn: string

  @ApiProperty()
  collectionId: number

  @ApiProperty({ required: false, type: CollectionEntity })
  collection?: CollectionEntity

  @Exclude()
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover?: ImagesEntity

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
  //

  // Constructor Methods
  constructor({
    collection,
    cover,
    ...data
  }: Partial<CollectionClothesEntity>) {
    Object.assign(this, data)

    if (collection) {
      this.collection = new CollectionEntity(collection)
    }

    if (cover) {
      this.cover = new ImagesEntity(cover)
    }
  }
  //
}
