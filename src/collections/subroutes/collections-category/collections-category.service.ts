import { Injectable } from '@nestjs/common'
import { CreateCollectionsCategoryDto } from './dto/create-collections-category.dto'
import { UpdateCollectionsCategoryDto } from './dto/update-collections-category.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CollectionsCategoryService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  create(createCollectionsCategoryDto: CreateCollectionsCategoryDto) {
    return this.prisma.collectionCategory.create({
      data: createCollectionsCategoryDto,
    })
  }

  findAll() {
    return this.prisma.collectionCategory.findMany({ include: { cover: true } })
  }

  findOne(id: number) {
    return this.prisma.collectionCategory.findUnique({
      where: { id: id },
      include: { cover: true },
    })
  }

  update(
    id: number,
    updateCollectionsCategoryDto: UpdateCollectionsCategoryDto,
  ) {
    return this.prisma.collectionCategory.update({
      where: { id: id },
      data: updateCollectionsCategoryDto,
      include: { cover: true },
    })
  }

  remove(id: number) {
    return this.prisma.collectionCategory.delete({ where: { id: id } })
  }
}
