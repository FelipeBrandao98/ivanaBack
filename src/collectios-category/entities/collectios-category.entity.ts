import { ApiProperty } from '@nestjs/swagger'
import { CollectionCategory } from '@prisma/client'

export class CollectiosCategoryEntity implements CollectionCategory {
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
