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
import { MailerService } from './mailer.service'
import { SendMailDto } from './dto/send-mailer.dto'
import { CreateMailerDto } from './dto/create-mailer.dto'
import { UpdateMailerDto } from './dto/update-mailer.dto'

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

import { MailerEntity } from './entities/mailer.entity'

@Controller('mailer')
@ApiTags('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  // Mailer Methods
  @Post('send')
  @ApiBearerAuth()
  async sendMail(@Body() sendMailDto: SendMailDto) {
    return this.mailerService.sendMailForUnique(sendMailDto)
  }

  // CRUD methods
  @Post()
  @ApiCreatedResponse({ type: MailerEntity })
  create(@Body() createMailerDto: CreateMailerDto) {
    return this.mailerService.create(createMailerDto)
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity, isArray: true })
  findAll() {
    return this.mailerService.findAll()
  }

  @Get(':mail')
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity })
  findOne(@Param('mail') mail: string) {
    return this.mailerService.findOne(mail)
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMailerDto: UpdateMailerDto,
  ) {
    return this.mailerService.update(id, updateMailerDto)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: MailerEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mailerService.remove(id)
  }
}
