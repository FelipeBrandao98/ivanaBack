// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'
import { Collection } from '@prisma/client'

@Injectable()
// Class declaration
export class CollectionsService {
  // Constructor Method
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operations - Properties
  async create(createCollectionDto: CreateCollectionDto): Promise<Collection> {
    return await this.prisma.collection.create({
      data: createCollectionDto,
      include: { cover: true, category: true },
    })
  }

  async findAll(): Promise<Collection[]> {
    return await this.prisma.collection.findMany({
      include: { cover: true, category: true },
    })
  }

  async findOne(collectionId: number): Promise<Collection> {
    return await this.prisma.collection.findUnique({
      where: { id: collectionId },
      include: { cover: true, category: true },
    })
  }

  async findByCategoryId(categoryId: number): Promise<Collection[]> {
    return await this.prisma.collection.findMany({
      where: { categoryId: categoryId },
      include: { cover: true, category: true },
    })
  }

  async update(
    collectionId: number,
    updateCollectionDto: UpdateCollectionDto,
  ): Promise<Collection> {
    return await this.prisma.collection.update({
      where: { id: collectionId },
      data: updateCollectionDto,
      include: { cover: true, category: true },
    })
  }

  async remove(collectionId: number): Promise<Collection> {
    return await this.prisma.collection.delete({ where: { id: collectionId } })
  }
  //
}
