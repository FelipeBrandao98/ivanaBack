import { ApiProperty } from '@nestjs/swagger'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class Collection {
  id: number

  @ApiProperty({ required: true })
  title: string

  @ApiProperty({ required: true })
  description: string

  @ApiProperty()
  categoryId: number

  @ApiProperty()
  coverId: number

  @ApiProperty({ required: false })
  cover: ImagesEntity
}
