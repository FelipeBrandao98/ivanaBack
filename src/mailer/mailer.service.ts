// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateMailerDto } from './dto/create-mailer.dto'
import { UpdateMailerDto } from './dto/update-mailer.dto'
import { SendMailDto } from './dto/send-mailer.dto'

// Send Mail imports
import { HttpService } from '@nestjs/axios'
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'

@Injectable()
// Class declaration
export class MailerService {
  // Constructor Method
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}
  //

  // Properties
  //
  // Send Mails
  sendMailForUnique(sendMailDto: SendMailDto): Observable<AxiosResponse> {
    return this.httpService.post('http://localhost:3002/send', sendMailDto)
  }

  async sendMail(sendMailDto: SendMailDto) {
    return sendMailDto
  }
  //

  //CRUD Operators
  async create(createMailerDto: CreateMailerDto) {
    return await this.prisma.mailer.create({ data: createMailerDto })
  }

  async findAll() {
    return await this.prisma.mailer.findMany()
  }

  async findOne(mail: string) {
    return await this.prisma.mailer.findUnique({ where: { mail: mail } })
  }

  async update(mailerId: number, updateMailerDto: UpdateMailerDto) {
    return await this.prisma.mailer.update({
      where: { id: mailerId },
      data: updateMailerDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.mailer.delete({ where: { id: id } })
  }
  //
  //
}
