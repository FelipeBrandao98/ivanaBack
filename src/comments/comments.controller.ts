// NestJs imports
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

// DTOs imports
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'

// Services imports
import { CommentsService } from './comments.service'

// Entities imports
import { CommentEntity } from './entities/comment.entity'

@ApiTags('Comments')
@Controller('comments')
// Class declaration
export class CommentsController {
  // Constructor Method
  constructor(private readonly commentsService: CommentsService) {}
  //

  // Properties
  @Post()
  @ApiOkResponse({ type: CommentEntity })
  async create(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<CommentEntity> {
    const comment = await this.commentsService.create(createCommentDto)

    return new CommentEntity(comment)
  }

  @Get()
  @ApiOkResponse({ type: CommentEntity })
  async findAll(): Promise<CommentEntity[]> {
    const comments = await this.commentsService.findAll()

    return comments.map((comment) => new CommentEntity(comment))
  }

  @Get(':commentId')
  async findOne(
    @Param('commentId', ParseIntPipe) commentId: number,
  ): Promise<CommentEntity> {
    const comment = await this.commentsService.findOne(commentId)
    return new CommentEntity(comment)
  }

  @Patch(':commentId')
  @ApiOkResponse({ type: CommentEntity })
  async update(
    @Param('commentId', ParseIntPipe) commentId: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity> {
    const comment = await this.commentsService.update(
      commentId,
      updateCommentDto,
    )

    return new CommentEntity(comment)
  }

  @Delete(':commentId')
  @ApiOkResponse({ type: CommentEntity })
  async remove(
    @Param('commentId', ParseIntPipe) commentId: number,
  ): Promise<CommentEntity> {
    const comment = await this.commentsService.remove(commentId)

    return new CommentEntity(comment)
  }
  //
}
