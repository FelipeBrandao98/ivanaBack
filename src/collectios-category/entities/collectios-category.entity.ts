import { ApiProperty } from '@nestjs/swagger'
import { CollectionCategory } from '@prisma/client'

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

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
}
