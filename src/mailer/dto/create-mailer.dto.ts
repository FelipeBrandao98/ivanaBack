import { ApiProperty } from '@nestjs/swagger'

export class CreateMailerDto {
  @ApiProperty({ required: true })
  mail: string
}
