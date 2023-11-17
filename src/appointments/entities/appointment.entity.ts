// NestJs imports
import { Exclude } from 'class-transformer'

// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { Appointment } from '@prisma/client'

// Entities imports
import { MailerEntity } from 'src/mailer/entities/mailer.entity'

// Class declaration
export class AppointmentEntity implements Appointment {
  // Properties
  @ApiProperty({ required: true })
  id: number

  @ApiProperty({ required: true })
  name: string

  @ApiProperty({ required: true })
  phone: string

  @ApiProperty({ required: true })
  bride: boolean

  @ApiProperty({ required: true })
  groom: boolean

  @ApiProperty({ required: true })
  debutant: boolean

  @ApiProperty({ required: true })
  bridesmaid: boolean

  @ApiProperty({ required: true })
  party: boolean

  @ApiProperty({ required: true })
  merryDate: Date

  @Exclude()
  mailerId: number

  @ApiProperty({ required: false, type: MailerEntity })
  mailer?: MailerEntity

  @ApiProperty({ required: true })
  createdAt: Date

  @ApiProperty({ required: true })
  updatedAt: Date
  //

  // Constructor Methods
  constructor({ mailer, ...data }: Partial<AppointmentEntity>) {
    Object.assign(this, data)

    if (mailer) {
      this.mailer = new MailerEntity(mailer)
    }
  }
  //
}
