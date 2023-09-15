import { ApiProperty } from '@nestjs/swagger'

export class CreateAppointmentDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty({ nullable: true, required: false })
  mailerId?: number

  @ApiProperty()
  phone: string

  @ApiProperty()
  bride: boolean

  @ApiProperty()
  groom: boolean

  @ApiProperty()
  debutant: boolean

  @ApiProperty()
  bridesmaid: boolean

  @ApiProperty()
  party: boolean

  @ApiProperty()
  merryDate: Date
}
