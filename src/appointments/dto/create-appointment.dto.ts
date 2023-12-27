// NestJs imports
import { ApiProperty } from '@nestjs/swagger'

// Validators Pipe Imports
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
} from 'class-validator'

// Class declaration
export class CreateAppointmentDto {
  // Properties
  @IsNotEmpty()
  @ApiProperty({ required: true })
  name: string

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ required: true })
  email: string

  @IsNumber()
  @ApiProperty({ required: false })
  mailerId: number

  @IsNotEmpty()
  // @IsPhoneNumber()
  @ApiProperty({ required: true })
  phone: string

  @IsNotEmpty()
  @ApiProperty({ required: false })
  bride: boolean

  @IsBoolean()
  @ApiProperty({ required: false })
  groom: boolean

  @IsBoolean()
  @ApiProperty({ required: false })
  debutant: boolean

  @IsBoolean()
  @ApiProperty({ required: false })
  bridesmaid: boolean

  @IsBoolean()
  @ApiProperty({ required: false })
  party: boolean

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ required: true })
  merryDate: Date
  //
}
