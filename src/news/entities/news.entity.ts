// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { News } from '@prisma/client'

// Entities imports
import { ImagesEntity } from 'src/images/entities/image.entity'
import { NewscategoryEntity } from '../subroutes/newscategory/entities/newscategory.entity'
import { Exclude } from 'class-transformer'

export class NewsEntity implements News {
  // Properties
  @ApiProperty()
  id: number

  @ApiProperty({ required: true, nullable: false })
  title: string

  @ApiProperty({ required: false, nullable: false })
  titleDe: string

  @ApiProperty({ required: false, nullable: false })
  titleEn: string

  @ApiProperty({ required: false, nullable: false })
  titleFr: string

  @ApiProperty({ required: true, nullable: false })
  coverCredit: string

  @ApiProperty({ required: true, nullable: true })
  coverCreditDe: string

  @ApiProperty({ required: true, nullable: true })
  coverCreditEn: string

  @ApiProperty({ required: true, nullable: true })
  coverCreditFr: string

  @ApiProperty({ required: true, nullable: false })
  subtitle: string

  @ApiProperty({ required: false, nullable: false })
  subtitleDe: string

  @ApiProperty({ required: false, nullable: false })
  subtitleEn: string

  @ApiProperty({ required: false, nullable: false })
  subtitleFr: string

  @ApiProperty({ required: true, nullable: false })
  publishDate: Date

  @ApiProperty()
  published: boolean

  @ApiProperty({ required: true, nullable: false })
  body: string

  @ApiProperty({ required: false, nullable: false })
  bodyDe: string

  @ApiProperty({ required: false, nullable: false })
  bodyEn: string

  @ApiProperty({ required: false, nullable: false })
  bodyFr: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @Exclude()
  coverId: number

  @ApiProperty({ required: false, type: ImagesEntity })
  cover?: ImagesEntity

  @Exclude()
  categoryId: number

  @ApiProperty({ required: false, type: NewscategoryEntity })
  category?: NewscategoryEntity

  // Constructor Methods
  constructor({ cover, category, ...data }: Partial<NewsEntity>) {
    Object.assign(this, data)

    if (cover) {
      this.cover = new ImagesEntity(cover)
    }

    if (category) {
      this.category = new NewscategoryEntity(category)
    }
  }
  //
}
