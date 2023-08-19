import { ApiProperty } from '@nestjs/swagger'
import { CollectionCategory } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class CollectiosCategoryEntity implements CollectionCategory {
  constructor(partial: Partial<CollectionCategory>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: number

  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: true })
  subdescription: string

  @ApiProperty({ required: false })
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover: ImagesEntity

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
}
