import { Injectable } from '@nestjs/common'
import { CreateMailerDto } from './dto/create-mailer.dto'
import { UpdateMailerDto } from './dto/update-mailer.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class MailerService {
  constructor(private prisma: PrismaService) {}

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
