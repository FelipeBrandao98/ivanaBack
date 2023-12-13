// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'

@Injectable()
// Class declaration
export class NewsService {
  // Constructor Methods
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operators - Properties
  async create(createNewsDto: CreateNewsDto) {
    return await this.prisma.news.create({ data: createNewsDto })
  }

  async findAll() {
    return await this.prisma.news.findMany({
      include: {
        cover: true,
        category: true,
      },
    })
  }

  async findOne(newsId: number) {
    return await this.prisma.news.findUnique({
      where: { id: newsId, published: true },
      include: {
        cover: true,
        category: true,
      },
    })
  }

  async findLatests() {
    return await this.prisma.news.findMany({
      where: { published: true },
      orderBy: [{ publishDate: 'desc' }],
      take: 4,
      include: {
        category: true,
        cover: true,
      },
    })
  }

  async findByCategorie(categoryId: number) {
    return await this.prisma.news.findMany({
      where: {
        categoryId: categoryId,
        published: true,
      },
      include: {
        category: true,
        cover: true,
      },
    })
  }

  async update(newsId: number, updateNewsDto: UpdateNewsDto) {
    return await this.prisma.news.update({
      where: { id: newsId },
      data: updateNewsDto,
    })
  }

  async remove(newsId: number) {
    return await this.prisma.news.delete({ where: { id: newsId } })
  }
  //
}
