import { ApiProperty } from '@nestjs/swagger'
import { CollectionCategory } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class CollectionsCategoryEntity implements CollectionCategory {
  constructor(partial: Partial<CollectionCategory>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: number

  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: false, nullable: true })
  descriptionDe: string | null

  @ApiProperty({ required: false, nullable: true })
  descriptionEn: string | null

  @ApiProperty({ required: false, nullable: true })
  descriptionFr: string | null

  @ApiProperty({ required: true })
  subdescription: string

  @ApiProperty({ required: false, nullable: true })
  subdescriptionDe: string | null

  @ApiProperty({ required: false, nullable: true })
  subdescriptionEn: string | null

  @ApiProperty({ required: false, nullable: true })
  subdescriptionFr: string | null

  @ApiProperty({ required: false })
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover: ImagesEntity

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
}
