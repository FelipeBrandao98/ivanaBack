import { ApiProperty } from '@nestjs/swagger'
import { CollectionClothes } from '@prisma/client'
import { CollectionEntity } from 'src/collections/entities/collection.entity'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class CollectionClothesEntity implements CollectionClothes {
  constructor(partial: Partial<CollectionClothes>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: string

  @ApiProperty()
  collection: CollectionEntity

  @ApiProperty()
  collectionId: number | null

  @ApiProperty()
  cover: ImagesEntity

  @ApiProperty()
  coverId: number | null

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

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
