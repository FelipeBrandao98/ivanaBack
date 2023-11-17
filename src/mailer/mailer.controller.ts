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
} from '@nestjs/common'

// NestJs - Swagger imports
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

// DTOs imports
import { CreateMailerDto } from './dto/create-mailer.dto'
import { UpdateMailerDto } from './dto/update-mailer.dto'
import { SendMailDto } from './dto/send-mailer.dto'

// Services imports
import { MailerService } from './mailer.service'

// Entities imports
import { MailerEntity } from './entities/mailer.entity'

import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'

@ApiTags('mailer')
@Controller('mailer')
// Class declaration
export class MailerController {
  // Constructor Method
  constructor(private readonly mailerService: MailerService) {}
  //

  // Mailer Methods
  @Post('send')
  @ApiBearerAuth()
  awaitsendMail(@Body() sendMailDto: SendMailDto): Observable<AxiosResponse> {
    const mailer = this.mailerService.sendMailForUnique(sendMailDto)

    return mailer
  }

  // CRUD methods
  @Post()
  @ApiCreatedResponse({ type: MailerEntity })
  async create(
    @Body() createMailerDto: CreateMailerDto,
  ): Promise<MailerEntity> {
    const mailer = await this.mailerService.create(createMailerDto)

    return new MailerEntity(mailer)
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity, isArray: true })
  async findAll(): Promise<MailerEntity[]> {
    const mailers = await this.mailerService.findAll()

    return mailers.map((mailer) => new MailerEntity(mailer))
  }

  @Get(':mail')
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity })
  async findOne(@Param('mail') mail: string): Promise<MailerEntity> {
    const mailer = await this.mailerService.findOne(mail)

    return new MailerEntity(mailer)
  }

  @Patch(':mailerId')
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity })
  async update(
    @Param('mailerId', ParseIntPipe) mailerId: number,
    @Body() updateMailerDto: UpdateMailerDto,
  ): Promise<MailerEntity> {
    const mailer = await this.mailerService.update(mailerId, updateMailerDto)

    return new MailerEntity(mailer)
  }

  @Delete(':mailerId')
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity })
  async remove(@Param('mailerId', ParseIntPipe) mailerId: number) {
    const mailer = await this.mailerService.remove(mailerId)

    return new MailerEntity(mailer)
  }
  //
}
