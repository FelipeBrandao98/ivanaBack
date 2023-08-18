import { ApiProperty } from '@nestjs/swagger'

export class CreateCollectionImageDto {
  @ApiProperty({ required: false })
  src: string

  @ApiProperty()
  url: string

  @ApiProperty({ required: false })
  author?: string

  @ApiProperty()
  collectionId?: number
}
