import { Injectable } from '@nestjs/common'
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operations
  create(createCollectionDto: CreateCollectionDto) {
    return this.prisma.collection.create({ data: createCollectionDto })
  }

  findAll() {
    return this.prisma.collection.findMany()
  }

  findOne(id: number) {
    return this.prisma.collection.findUnique({
      where: { id: id },
    })
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return this.prisma.collection.update({
      where: { id: id },
      data: updateCollectionDto,
    })
  }

  remove(id: number) {
    return this.prisma.collection.delete({ where: { id: id } })
  }
}