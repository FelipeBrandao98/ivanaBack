import { Injectable } from '@nestjs/common'
import { CreateImageDto } from './dto/create-image.dto'
import { UpdateImageDto } from './dto/update-image.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  create(createImageDto: CreateImageDto) {
    return this.prisma.image.create({ data: createImageDto })
  }

  findOne(id: number) {
    return this.prisma.image.findUnique({
      where: { id: id },
    })
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return this.prisma.image.update({
      where: { id: id },
      data: updateImageDto,
    })
  }

  remove(id: number) {
    return this.prisma.image.delete({
      where: { id: id },
    })
  }
}
