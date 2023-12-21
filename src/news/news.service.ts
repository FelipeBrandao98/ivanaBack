// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import { News } from '@prisma/client'

@Injectable()
// Class declaration
export class NewsService {
  // Constructor Methods
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operators - Properties
  async create(createNewsDto: CreateNewsDto): Promise<News> {
    return await this.prisma.news.create({ data: createNewsDto })
  }

  async findAll(skip?: number): Promise<News[]> {
    if (!skip) {
      skip = 0
    } else {
      skip = skip - 1
    }
    return await this.prisma.news.findMany({
      skip: skip * 5,
      include: {
        cover: true,
        category: true,
      },
      orderBy: {
        publishDate: 'desc',
      },
      take: 5,
    })
  }

  async findOne(newsId: number): Promise<News> {
    return await this.prisma.news.findUnique({
      where: { id: newsId, published: true },
      include: {
        cover: true,
        category: true,
      },
    })
  }

  async findLatests(): Promise<News[]> {
    return await this.prisma.news.findMany({
      where: { published: true },
      orderBy: { publishDate: 'desc' },
      take: 4,
      include: {
        category: true,
        cover: true,
      },
    })
  }

  async findByCategory(categoryId: number, skip?: number): Promise<News[]> {
    if (!skip) {
      skip = 0
    } else {
      skip = skip - 1
    }
    return await this.prisma.news.findMany({
      where: { categoryId: categoryId },
      skip: skip * 5,
      include: {
        cover: true,
        category: true,
      },
      orderBy: {
        publishDate: 'desc',
      },
      take: 5,
    })
  }

  async getPagesbyCat(categoryId: number): Promise<string> {
    return Math.ceil(
      (await this.prisma.news.count({
        where: { categoryId },
      })) / 5,
    ).toFixed()
  }

  async getPages(): Promise<string> {
    return Math.ceil((await this.prisma.news.count()) / 5).toFixed()
  }

  async update(newsId: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    return await this.prisma.news.update({
      where: { id: newsId },
      data: updateNewsDto,
    })
  }

  async remove(newsId: number): Promise<News> {
    return await this.prisma.news.delete({ where: { id: newsId } })
  }
  //
}
