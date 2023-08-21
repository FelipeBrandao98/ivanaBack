import { ApiProperty } from '@nestjs/swagger'

export class CreateAvaliationDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  avaliation: number

  @ApiProperty()
  description: string

  @ApiProperty()
  likes: number

  @ApiProperty()
  isActive: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  imageId: number
}
