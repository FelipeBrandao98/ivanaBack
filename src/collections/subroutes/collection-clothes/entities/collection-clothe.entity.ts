// NestJs imports
import { ApiProperty } from '@nestjs/swagger'

import { CollectionClothes } from '@prisma/client'
import { Exclude } from 'class-transformer'

import { CollectionEntity } from 'src/collections/entities/collection.entity'
import { ImagesEntity } from 'src/images/entities/image.entity'

// Class declaration
export class CollectionClothesEntity implements CollectionClothes {
  // Constructor Methods
  constructor(
    partial: Partial<CollectionClothesEntity[] | CollectionClothesEntity>,
  ) {
    Object.assign(this, partial)
  }
  //

  // Properties
  @ApiProperty()
  id: number

  @ApiProperty()
  likes: number

  @ApiProperty()
  name: string

  @ApiProperty()
  nameDe: string

  @ApiProperty()
  nameFr: string

  @ApiProperty()
  nameEn: string

  @Exclude()
  collectionId: number

  // @ApiProperty({ required: false, type: CollectionEntity })
  // collection: CollectionEntity

  @Exclude()
  coverId: number

  // @ApiProperty({ required: false, type: ImagesEntity })
  // cover: ImagesEntity

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
  //
}
