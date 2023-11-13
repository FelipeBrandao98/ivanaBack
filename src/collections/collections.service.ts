// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'

@Injectable()
// Class declaration
export class CollectionsService {
  // Constructor Method
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operations - Properties
  async create(createCollectionDto: CreateCollectionDto) {
    return await this.prisma.collection.create({
      data: createCollectionDto,
      include: { cover: true, category: true },
    })
  }

  async findAll() {
    return await this.prisma.collection.findMany({
      include: { cover: true, category: true },
    })
  }

  async findOne(collectionId: number) {
    return await this.prisma.collection.findUnique({
      where: { id: collectionId },
      include: { cover: true, category: true },
    })
  }

  async update(collectionId: number, updateCollectionDto: UpdateCollectionDto) {
    return await this.prisma.collection.update({
      where: { id: collectionId },
      data: updateCollectionDto,
      include: { cover: true, category: true },
    })
  }

  async remove(collectionId: number) {
    return await this.prisma.collection.delete({ where: { id: collectionId } })
  }
  //
}
