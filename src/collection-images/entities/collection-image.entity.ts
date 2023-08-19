import { ApiProperty } from '@nestjs/swagger'
import { CollectionImages } from '@prisma/client'
import { CollectionEntity } from 'src/collections/entities/collection.entity'

export class CollectionImagesEntity implements CollectionImages {
  constructor(partial: Partial<CollectionImages>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: number

  @ApiProperty({ required: false })
  src: string

  @ApiProperty()
  url: string

  @ApiProperty({ required: false })
  author: string

  @ApiProperty()
  collectionId: number | null

  @ApiProperty({ required: false, type: CollectionEntity })
  collection: CollectionEntity

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
