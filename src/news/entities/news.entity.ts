import { ApiProperty } from '@nestjs/swagger'
import { News } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'
import { NewscategoryEntity } from '../subroutes/newscategory/entities/newscategory.entity'

export class NewsEntity implements News {
  @ApiProperty()
  id: number

  @ApiProperty({ required: true })
  categoryId: number

  @ApiProperty({ required: true, nullable: false })
  title: string

  @ApiProperty({ required: false, nullable: false })
  titleDe: string | null

  @ApiProperty({ required: false, nullable: false })
  titleEn: string | null

  @ApiProperty({ required: false, nullable: false })
  titleFr: string | null

  @ApiProperty({ required: false })
  coverId: number

  @ApiProperty({ required: true, nullable: false })
  coverCredit: string

  @ApiProperty({ required: true, nullable: true })
  coverCreditDe: string | null

  @ApiProperty({ required: true, nullable: true })
  coverCreditEn: string | null

  @ApiProperty({ required: true, nullable: true })
  coverCreditFr: string | null

  @ApiProperty({ required: true, nullable: false })
  subtitle: string

  @ApiProperty({ required: false, nullable: false })
  subtitleDe: string | null

  @ApiProperty({ required: false, nullable: false })
  subtitleEn: string | null

  @ApiProperty({ required: false, nullable: false })
  subtitleFr: string | null

  @ApiProperty({ required: true, nullable: false })
  publishDate: Date

  @ApiProperty()
  published: boolean

  @ApiProperty({ required: true, nullable: false })
  body: string

  @ApiProperty({ required: false, nullable: false })
  bodyDe: string | null

  @ApiProperty({ required: false, nullable: false })
  bodyEn: string | null

  @ApiProperty({ required: false, nullable: false })
  bodyFr: string | null

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty({ required: false, type: ImagesEntity })
  cover?: ImagesEntity

  @ApiProperty({ required: false, type: NewscategoryEntity })
  category?: NewscategoryEntity
}
