import { ApiProperty } from '@nestjs/swagger'

export class CreateCollectionClotheDto {
  @ApiProperty({ required: false })
  collectionId?: number

  @ApiProperty()
  coverId?: number

  @ApiProperty()
  likes: number

  @ApiProperty()
  name: string

  @ApiProperty()
  nameDe: string

  @ApiProperty()
  nameFr: string

  @ApiProperty()
  nameEn: string
}
