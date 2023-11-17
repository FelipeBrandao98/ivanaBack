import { Injectable } from '@nestjs/common'
import { CreateNewscategoryDto } from './dto/create-newscategory.dto'
import { UpdateNewscategoryDto } from './dto/update-newscategory.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
// Class declaration
export class NewscategoryService {
  // Constructor Methods
  constructor(private prisma: PrismaService) {}
  //

  // CRUD operators - Properties
  async create(createNewscategoryDto: CreateNewscategoryDto) {
    return await this.prisma.newsCategory.create({
      data: createNewscategoryDto,
    })
  }

  async findAll() {
    return await this.prisma.newsCategory.findMany()
  }

  async findOne(newsCategoryId: number) {
    return await this.prisma.newsCategory.findUnique({
      where: { id: newsCategoryId },
    })
  }

  async update(
    newsCategoryId: number,
    updateNewscategoryDto: UpdateNewscategoryDto,
  ) {
    return await this.prisma.newsCategory.update({
      where: { id: newsCategoryId },
      data: updateNewscategoryDto,
    })
  }

  async remove(newsCategoryId: number) {
    return await this.prisma.newsCategory.delete({
      where: { id: newsCategoryId },
    })
  }
  //
}
