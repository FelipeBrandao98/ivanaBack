import { Injectable } from '@nestjs/common'
import { CreateNewscategoryDto } from './dto/create-newscategory.dto'
import { UpdateNewscategoryDto } from './dto/update-newscategory.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class NewscategoryService {
  constructor(private prisma: PrismaService) {}

  // CRUD operators
  create(createNewscategoryDto: CreateNewscategoryDto) {
    return this.prisma.newsCategory.create({ data: createNewscategoryDto })
  }

  findAll() {
    return this.prisma.newsCategory.findMany()
  }

  findOne(id: number) {
    return this.prisma.newsCategory.findUnique({ where: { id: id } })
  }

  update(id: number, updateNewscategoryDto: UpdateNewscategoryDto) {
    return this.prisma.newsCategory.update({
      where: { id: id },
      data: updateNewscategoryDto,
    })
  }

  remove(id: number) {
    return this.prisma.newsCategory.delete({ where: { id: id } })
  }
}
