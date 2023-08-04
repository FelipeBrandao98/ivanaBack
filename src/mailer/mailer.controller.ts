import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { MailerService } from './mailer.service'
import { CreateMailerDto } from './dto/create-mailer.dto'
import { UpdateMailerDto } from './dto/update-mailer.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { MailerEntity } from './entities/mailer.entity'

@Controller('mailer')
@ApiTags('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  @ApiCreatedResponse({ type: MailerEntity })
  create(@Body() createMailerDto: CreateMailerDto) {
    return this.mailerService.create(createMailerDto)
  }

  @Get()
  @ApiOkResponse({ type: MailerEntity, isArray: true })
  findAll() {
    return this.mailerService.findAll()
  }

  @Get(':mail')
  @ApiOkResponse({ type: MailerEntity })
  findOne(@Param('mail') mail: string) {
    return this.mailerService.findOne(mail)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailerDto: UpdateMailerDto) {
    return this.mailerService.update(+id, updateMailerDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: MailerEntity })
  remove(@Param('id') id: string) {
    return this.mailerService.remove(+id)
  }
}
