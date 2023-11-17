// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateAppointmentDto } from './dto/create-appointment.dto'
import { UpdateAppointmentDto } from './dto/update-appointment.dto'

@Injectable()
// Class declaration
export class AppointmentsService {
  // Constructor Methods
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operations - Properties
  async create(createAppointmentDto: CreateAppointmentDto) {
    return await this.prisma.appointment.create({
      data: createAppointmentDto,
      include: { mailer: true },
    })
  }

  async findAll() {
    return await this.prisma.appointment.findMany({ include: { mailer: true } })
  }

  async findOne(id: number) {
    return await this.prisma.appointment.findUnique({
      where: { id: id },
      include: { mailer: true },
    })
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return await this.prisma.appointment.update({
      where: { id: id },
      include: { mailer: true },
      data: updateAppointmentDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.appointment.delete({
      where: { id: id },
      include: { mailer: true },
    })
  }
  //
}
