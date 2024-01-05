// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { CommentEntity } from './entities/comment.entity'

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

  async findAllPosted() {
    return await this.prisma.comments.findMany({
      where: { isActive: true },
      include: { image: true },
    })
  }

  async findAll() {
    return await this.prisma.comments.findMany({
      include: { image: true },
    })
  }

  async findOne(commentId: number) {
    return await this.prisma.comments.findUnique({
      where: { id: commentId },
      include: { image: true },
    })
  }

  async setLike(commentId: number, likes: number) {
    return await this.prisma.comments.update({
      where: { id: commentId },
      data: { likes: likes + 1 },
    })
  }

  async update(
    commentId: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity> {
    updateCommentDto.isActive = true

    return await this.prisma.comments.update({
      where: { id: commentId },
      data: updateCommentDto,
    })
  }

  async getCommentByCode(commentCode: string) {
    return await this.prisma.comments.findUnique({
      where: { commentCode: commentCode },
    })
  }

  async remove(commentId: number) {
    return await this.prisma.comments.delete({ where: { id: commentId } })
  }
  //
}
