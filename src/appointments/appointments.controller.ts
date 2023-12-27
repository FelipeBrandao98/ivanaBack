// NestJs imports
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common'

// NestJs - Swagger imports
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

// DTOs imports
import { CreateAppointmentDto } from './dto/create-appointment.dto'
import { UpdateAppointmentDto } from './dto/update-appointment.dto'
import { CreateMailerDto } from 'src/mailer/dto/create-mailer.dto'

// Services imports
import { AppointmentsService } from './appointments.service'
import { MailerService } from 'src/mailer/mailer.service'

// Entities imports
import { AppointmentEntity } from './entities/appointment.entity'

// Security imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Appointments')
@Controller('appointments')
// Class declarations
export class AppointmentsController {
  // Constructor Methods
  constructor(
    private readonly appointmentsService: AppointmentsService,
    private readonly mailerService: MailerService,
  ) {}
  //

  // Properties
  @Post()
  @ApiCreatedResponse({ type: AppointmentEntity })
  async create(
    @Body() createAppointmentDto: CreateAppointmentDto, // : Promise<AppointmentEntity>
  ) {
    const createMailerDto: CreateMailerDto = {
      mail: createAppointmentDto.email,
    }

    const emailExists = await this.mailerService.findOne(
      createAppointmentDto.email,
    )

    if (emailExists) {
      createAppointmentDto.mailerId = emailExists.id
    }

    if (!emailExists) {
      const { id: mailerId } = await this.mailerService.create(createMailerDto)
      createAppointmentDto.mailerId = mailerId
    }

    delete createAppointmentDto.email

    const appointment = await this.appointmentsService.create(
      createAppointmentDto,
    )

    return new AppointmentEntity(appointment)
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: AppointmentEntity })
  async findAll(): Promise<AppointmentEntity[]> {
    const appointments = await this.appointmentsService.findAll()

    return appointments.map((appointment) => new AppointmentEntity(appointment))
  }

  @Get(':appointmentId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: AppointmentEntity })
  async findOne(
    @Param('appointmentId', ParseIntPipe) appointmentId: number,
  ): Promise<AppointmentEntity> {
    const appointment = await this.appointmentsService.findOne(appointmentId)

    return new AppointmentEntity(appointment)
  }

  @Patch(':appointmentId')
  @ApiOkResponse({ type: AppointmentEntity })
  async update(
    @Param('appointmentId', ParseIntPipe) appointmentId: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<AppointmentEntity> {
    const appointment = await this.appointmentsService.update(
      appointmentId,
      updateAppointmentDto,
    )

    return new AppointmentEntity(appointment)
  }

  @Delete(':appointmentId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: AppointmentEntity })
  async remove(
    @Param('appointmentId', ParseIntPipe) appointmentId: number,
  ): Promise<AppointmentEntity> {
    const appointment = await this.appointmentsService.remove(appointmentId)

    return new AppointmentEntity(appointment)
  }
  //
}
