// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { CollectionCategory } from '@prisma/client'

// Entities imports
import { ImagesEntity } from 'src/images/entities/image.entity'

// Class declaration
export class CollectionsCategoryEntity implements CollectionCategory {
  // Properties
  @ApiProperty({ required: true, type: 'uuid' })
  id: number

  @ApiProperty({ required: true, type: 'string' })
  description: string

  @ApiProperty({ required: true, type: 'string' })
  descriptionDe: string

  @ApiProperty({ required: true, type: 'string' })
  descriptionEn: string

  @ApiProperty({ required: true, type: 'string' })
  descriptionFr: string

  @ApiProperty({ required: true, type: 'string' })
  subdescription: string

  @ApiProperty({ required: true, type: 'string' })
  subdescriptionDe: string

  @ApiProperty({ required: true, type: 'string' })
  subdescriptionEn: string

  @ApiProperty({ required: true, type: 'string' })
  subdescriptionFr: string

  @ApiProperty({ required: false, type: 'number' })
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover?: ImagesEntity

  @ApiProperty({ required: true, type: Date })
  createdAt: Date

  @ApiProperty({ required: true, type: Date })
  updatedAt: Date
  //

  // Constructor Method
  constructor({ cover, ...data }: Partial<CollectionsCategoryEntity>) {
    Object.assign(this, data)

    if (cover) {
      this.cover = new ImagesEntity(cover)
    }
  }
  //
}
