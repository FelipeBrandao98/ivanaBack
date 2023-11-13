// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateCollectionsCategoryDto } from './dto/create-collections-category.dto'
import { UpdateCollectionsCategoryDto } from './dto/update-collections-category.dto'

@Injectable()
// Class declaration
export class CollectionsCategoryService {
  // Contructor Method
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operations - Properties
  async create(createCollectionsCategoryDto: CreateCollectionsCategoryDto) {
    return await this.prisma.collectionCategory.create({
      data: createCollectionsCategoryDto,
    })
  }

  async findAll() {
    return await this.prisma.collectionCategory.findMany({
      include: { cover: true },
    })
  }

  async findOne(id: number) {
    return await this.prisma.collectionCategory.findUnique({
      where: { id: id },
      include: { cover: true },
    })
  }

  async update(
    collectionCategoryId: number,
    updateCollectionsCategoryDto: UpdateCollectionsCategoryDto,
  ) {
    return await this.prisma.collectionCategory.update({
      where: { id: collectionCategoryId },
      data: updateCollectionsCategoryDto,
      include: { cover: true },
    })
  }

  async remove(collectionCategoryId: number) {
    return await this.prisma.collectionCategory.delete({
      where: { id: collectionCategoryId },
    })
  }
}
