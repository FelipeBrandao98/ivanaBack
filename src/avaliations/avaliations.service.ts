import { Injectable } from '@nestjs/common'
import { CreateAvaliationDto } from './dto/create-avaliation.dto'
import { UpdateAvaliationDto } from './dto/update-avaliation.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AvaliationsService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  create(createAvaliationDto: CreateAvaliationDto) {
    return this.prisma.avaliation.create({ data: createAvaliationDto })
  }

  findAll() {
    return this.prisma.avaliation.findMany()
  }

  findOne(id: number) {
    return this.prisma.avaliation.findUnique({
      where: { id: id },
      include: { Image: true },
    })
  }

  update(id: number, updateAvaliationDto: UpdateAvaliationDto) {
    return this.prisma.avaliation.update({
      where: { id: id },
      data: updateAvaliationDto,
    })
  }

  remove(id: number) {
    return this.prisma.avaliation.delete({ where: { id: id } })
  }
}
