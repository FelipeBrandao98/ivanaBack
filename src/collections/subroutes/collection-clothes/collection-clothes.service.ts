// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateCollectionClotheDto } from './dto/create-collection-clothe.dto'
import { UpdateCollectionClotheDto } from './dto/update-collection-clothe.dto'

@Injectable()
// Class declaration
export class CollectionClothesService {
  // Constructor Method
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operators - Properties
  async create(createCollectionClotheDto: CreateCollectionClotheDto) {
    return this.prisma.collectionClothes.create({
      data: createCollectionClotheDto,
      include: { collection: true, cover: true },
    })
  }

  async findAll(collectionId: number) {
    return this.prisma.collectionClothes.findMany({
      where: { collectionId: collectionId, isProduct: false || null },
      include: { collection: true, cover: true },
    })
  }

  async findProducts(collectionId: number) {
    return this.prisma.collectionClothes.findMany({
      where: { collectionId: collectionId, isProduct: true },
      include: { collection: true, cover: true },
    })
  }

  async findOne(collectionClothesId: number) {
    return this.prisma.collectionClothes.findUnique({
      where: { id: collectionClothesId },
      include: { collection: true, cover: true },
    })
  }

  async update(
    collectionClothesId: number,
    updateCollectionClotheDto: UpdateCollectionClotheDto,
  ) {
    return this.prisma.collectionClothes.update({
      where: { id: collectionClothesId },
      data: updateCollectionClotheDto,
      include: { collection: true, cover: true },
    })
  }

  async remove(collectionClothesId: number) {
    return this.prisma.collectionClothes.delete({
      where: { id: collectionClothesId },
      include: { collection: true, cover: true },
    })
  }
  //
}
