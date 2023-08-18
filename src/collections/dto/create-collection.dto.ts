import { ApiProperty } from '@nestjs/swagger'

export class CreateCollectionDto {
  @ApiProperty({ required: true })
  title: string

  @ApiProperty({ required: true })
  description: string

  @ApiProperty()
  categoryId: number

  @ApiProperty()
  coverId: number
}
