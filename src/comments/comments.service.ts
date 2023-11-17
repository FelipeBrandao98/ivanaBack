// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'

@Injectable()
// Class declaration
export class CommentsService {
  // Constructor Methods
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operators - Properties
  async create(createCommentDto: CreateCommentDto) {
    return await this.prisma.comments.create({ data: createCommentDto })
  }

  async findAll() {
    return await this.prisma.comments.findMany({ include: { image: true } })
  }

  async findOne(commentId: number) {
    return await this.prisma.comments.findUnique({
      where: { id: commentId },
      include: { image: true },
    })
  }

  async update(commentId: number, updateCommentDto: UpdateCommentDto) {
    return await this.prisma.comments.update({
      where: { id: commentId },
      data: updateCommentDto,
      include: { image: true },
    })
  }

  async remove(commentId: number) {
    return await this.prisma.comments.delete({ where: { id: commentId } })
  }
  //
}
