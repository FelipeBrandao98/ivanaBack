import { Injectable } from '@nestjs/common'
import { CreateMailerDto } from './dto/create-mailer.dto'
import { UpdateMailerDto } from './dto/update-mailer.dto'
import { SendMailDto } from './dto/send-mailer.dto'

import { PrismaService } from 'src/prisma/prisma.service'
import { HttpService } from '@nestjs/axios'
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'

@Injectable()
export class MailerService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  sendMailForUnique(sendMailDto: SendMailDto): Observable<AxiosResponse> {
    return this.httpService.post('http://localhost:3002/send', sendMailDto)
  }

  async sendMail(sendMailDto: SendMailDto) {
    return sendMailDto
  }

  //CRUD Operators
  create(createMailerDto: CreateMailerDto) {
    return this.prisma.mailer.create({ data: createMailerDto })
  }

  findAll() {
    return this.prisma.mailer.findMany()
  }

  findOne(mail: string) {
    return this.prisma.mailer.findUnique({ where: { mail: mail } })
  }

  update(id: number, updateMailerDto: UpdateMailerDto) {
    return `This action updates a #${id} mailer`
  }

  remove(id: number) {
    return this.prisma.mailer.delete({ where: { id: id } })
  }
}
