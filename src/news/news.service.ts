import { Injectable } from '@nestjs/common'
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  create(createNewsDto: CreateNewsDto) {
    return this.prisma.news.create({ data: createNewsDto })
  }

  findAll() {
    return this.prisma.news.findMany({
      include: {
        cover: true,
        category: true,
      },
    })
  }

  findOne(id: number) {
    return this.prisma.news.findUnique({
      where: { id: id },
      include: {
        cover: true,
        category: true,
      },
    })
  }

  findCategories(category: number) {
    return this.prisma.news.findMany({
      where: {
        categoryId: category,
      },
      include: {
        category: true,
        cover: true,
      },
    })
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return this.prisma.news.update({ where: { id: id }, data: updateNewsDto })
  }

  remove(id: number) {
    return this.prisma.news.delete({ where: { id: id } })
  }
}
