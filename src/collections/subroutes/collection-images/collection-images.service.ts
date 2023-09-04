import { Injectable } from '@nestjs/common'
import { CreateCollectionImageDto } from './dto/create-collection-image.dto'
import { UpdateCollectionImageDto } from './dto/update-collection-image.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CollectionImagesService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  create(createCollectionImageDto: CreateCollectionImageDto) {
    return this.prisma.collectionImages.create({
      data: createCollectionImageDto,
    })
  }

  findAll() {
    return this.prisma.collectionImages.findMany({
      include: { collection: true },
    })
  }

  findOne(id: number) {
    return this.prisma.collectionImages.findUnique({
      where: { id: id },
      include: { collection: true },
    })
  }

  findByCollectionId(id: number) {
    return this.prisma.collectionImages.findMany({
      where: { collectionId: id },
    })
  }

  update(id: number, updateCollectionImageDto: UpdateCollectionImageDto) {
    return this.prisma.collectionImages.update({
      where: { id: id },
      data: updateCollectionImageDto,
      include: { collection: true },
    })
  }

  updateProps(id: number, updateCollectionImageDto: UpdateCollectionImageDto) {
    return this.prisma.collectionImages.update({
      where: { id: id },
      data: updateCollectionImageDto,
      include: { collection: true },
    })
  }

  remove(id: number) {
    return this.prisma.collectionImages.delete({ where: { id: id } })
  }
}
