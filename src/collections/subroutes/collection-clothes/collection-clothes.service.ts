import { Injectable } from '@nestjs/common'
import { CreateCollectionClotheDto } from './dto/create-collection-clothe.dto'
import { UpdateCollectionClotheDto } from './dto/update-collection-clothe.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CollectionClothesService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  create(createCollectionClotheDto: CreateCollectionClotheDto) {
    return this.prisma.collectionClothes.create({
      data: createCollectionClotheDto,
    })
  }

  findAll() {
    return this.prisma.collectionClothes.findMany({
      include: { collection: true, cover: true },
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} collectionClothe`
  }

  update(id: string, updateCollectionClotheDto: UpdateCollectionClotheDto) {
    return this.prisma.collectionClothes.update({
      where: { id: id },
      data: updateCollectionClotheDto,
      include: { collection: true, cover: true },
    })
  }

  remove(id: string) {
    return this.prisma.collectionClothes.delete({ where: { id: id } })
  }
}
