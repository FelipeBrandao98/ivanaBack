import { ApiProperty } from '@nestjs/swagger'
import { CollectionImages } from '@prisma/client'

export class CollectionImagesEntity implements CollectionImages {
  constructor(partial: Partial<CollectionImagesEntity>) {
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
  collectionId: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
