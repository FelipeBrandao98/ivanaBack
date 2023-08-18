import { ApiProperty } from '@nestjs/swagger'

export class CollectionImage {
  @ApiProperty()
  id: number

  @ApiProperty({ required: false })
  src: string

  @ApiProperty()
  url: string

  @ApiProperty({ required: false })
  author?: string

  @ApiProperty()
  collectionId?: number
}
