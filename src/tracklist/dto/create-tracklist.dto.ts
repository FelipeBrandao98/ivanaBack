import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateTracklistDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  name: string

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  audioId: number

  @IsBoolean()
  @ApiProperty({ required: false })
  isHomeSong: boolean
}
