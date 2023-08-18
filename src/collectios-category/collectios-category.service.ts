import { Injectable } from '@nestjs/common'
import { CreateCollectiosCategoryDto } from './dto/create-collectios-category.dto'
import { UpdateCollectiosCategoryDto } from './dto/update-collectios-category.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CollectiosCategoryService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  create(createCollectiosCategoryDto: CreateCollectiosCategoryDto) {
    return this.prisma.collectionCategory.create({
      data: createCollectiosCategoryDto,
    })
  }

  findAll() {
    return this.prisma.collectionCategory.findMany()
  }

  findOne(id: number) {
    return this.prisma.collectionCategory.findUnique({ where: { id: id } })
  }

  update(id: number, updateCollectiosCategoryDto: UpdateCollectiosCategoryDto) {
    return this.prisma.collectionCategory.update({
      where: { id: id },
      data: updateCollectiosCategoryDto,
    })
  }

  remove(id: number) {
    return this.prisma.collectionCategory.delete({ where: { id: id } })
  }
}
