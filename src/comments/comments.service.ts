import { Injectable } from '@nestjs/common'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comments.create({ data: createCommentDto })
  }

  findAll() {
    return this.prisma.comments.findMany()
  }

  findOne(id: number) {
    return this.prisma.comments.findUnique({
      where: { id: id },
      include: { image: true },
    })
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comments.update({
      where: { id: id },
      data: updateCommentDto,
      include: { image: true },
    })
  }

  remove(id: number) {
    return this.prisma.comments.delete({ where: { id: id } })
  }
}
