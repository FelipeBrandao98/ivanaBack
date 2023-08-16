import { ApiProperty } from '@nestjs/swagger'
import { News } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'
import { NewscategoryEntity } from 'src/newscategory/entities/newscategory.entity'

export class NewsEntity implements News {
  @ApiProperty()
  id: number

  @ApiProperty({ required: true })
  categoryId: number

  @ApiProperty({ required: true, nullable: false })
  title: string

  @ApiProperty({ required: false })
  coverId: number | null

  @ApiProperty({ required: true, nullable: false })
  coverCredit: string

  @ApiProperty({ required: true, nullable: false })
  subtitle: string

  @ApiProperty({ required: true, nullable: false })
  publishDate: Date

  @ApiProperty()
  published: boolean

  @ApiProperty({ required: true, nullable: false })
  body: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty({ required: false, type: ImagesEntity })
  cover?: ImagesEntity

  @ApiProperty({ required: false, type: NewscategoryEntity })
  newscategory?: NewscategoryEntity
}
