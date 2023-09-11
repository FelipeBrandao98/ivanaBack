import { Injectable } from '@nestjs/common'
import { CreateAppointmentDto } from './dto/create-appointment.dto'
import { UpdateAppointmentDto } from './dto/update-appointment.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data: createAppointmentDto })
  }

  findAll() {
    return this.prisma.appointment.findMany({ include: { mailer: true } })
  }

  findOne(id: number) {
    return this.prisma.appointment.findUnique({
      where: { id: id },
      include: { mailer: true },
    })
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.prisma.appointment.update({
      where: { id: id },
      data: updateAppointmentDto,
    })
  }

  remove(id: number) {
    return this.prisma.appointment.delete({ where: { id: id } })
  }
}
