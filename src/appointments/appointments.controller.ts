import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { AppointmentsService } from './appointments.service'
import { CreateAppointmentDto } from './dto/create-appointment.dto'
import { UpdateAppointmentDto } from './dto/update-appointment.dto'
import { MailerService } from 'src/mailer/mailer.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AppointmentEntity } from './entities/appointment.entity'
import { CreateMailerDto } from 'src/mailer/dto/create-mailer.dto'

@Controller('appointments')
@ApiTags('Appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentsService: AppointmentsService,
    private readonly mailerService: MailerService,
  ) {}

  @Post()
  @ApiOkResponse({ type: AppointmentEntity })
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
    const emailFromDatabase = this.mailerService.findOne(
      createAppointmentDto.email,
    )
    const hasEmail = await emailFromDatabase.then((email) => {
      return email
    })

    const createMailerDto: CreateMailerDto = {
      mail: createAppointmentDto.email,
    }

    if (!hasEmail) {
      const createdEmail = await this.mailerService.create(createMailerDto)
      createAppointmentDto.mailerId = createdEmail.id
      delete createAppointmentDto.email
    } else {
      createAppointmentDto.mailerId = hasEmail.id
      delete createAppointmentDto.email
    }

    return await this.appointmentsService.create(createAppointmentDto)
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(+id, updateAppointmentDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(+id)
  }
}
