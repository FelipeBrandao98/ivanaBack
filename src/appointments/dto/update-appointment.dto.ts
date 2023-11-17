// NestJs - Swagger imports
import { PartialType } from '@nestjs/swagger'

// DTOs imports
import { CreateAppointmentDto } from './create-appointment.dto'

// Class declaration
export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {
  // Properties
}
