import { Appointment } from '@prisma/client'
import { MailerEntity } from 'src/mailer/entities/mailer.entity'

export class AppointmentEntity implements Appointment {
  id: number
  name: string
  mailerId: number
  mailer: MailerEntity
  phone: string
  bride: boolean
  groom: boolean
  debutant: boolean
  bridesmaid: boolean
  party: boolean
  merryDate: Date
  createdAt: Date
  updatedAt: Date
}
