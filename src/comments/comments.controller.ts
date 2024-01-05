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
  UseGuards,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'

// DTOs imports
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'

// Services imports
import { CommentsService } from './comments.service'

// Entities imports
import { CommentEntity } from './entities/comment.entity'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Comments')
@Controller('comments')
// Class declaration
export class CommentsController {
  // Constructor Method
  constructor(private readonly commentsService: CommentsService) {}
  //

  // Properties
  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CommentEntity })
  async create(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<CommentEntity> {
    const comment = await this.commentsService.create(createCommentDto)

    return new CommentEntity(comment)
  }

  @Get()
  @ApiOkResponse({ type: CommentEntity })
  async findAllPostes(): Promise<CommentEntity[]> {
    const comments = await this.commentsService.findAllPosted()

    return comments.map((comment) => new CommentEntity(comment))
  }

  @Get('all')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
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

  @Patch(':commentCode')
  @ApiOkResponse({ type: CommentEntity })
  async update(
    @Param('commentCode') commentCode: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity | void> {
    const commentExists = await this.commentsService.getCommentByCode(
      commentCode,
    )

    if (commentExists && commentExists.isActive === false) {
      const comment = await this.commentsService.update(
        commentExists.id,
        updateCommentDto,
      )

      return new CommentEntity(comment)
    }
  }

  @Patch('like/:commentId')
  @ApiOkResponse({ type: CommentEntity })
  async like(
    @Param('commentId', ParseIntPipe) commentId: number,
  ): Promise<CommentEntity | void> {
    const commentExists = await this.commentsService.findOne(commentId)

    if (commentExists) {
      const like = await this.commentsService.setLike(
        commentExists.id,
        commentExists.likes ? commentExists.likes : 0,
      )

      return new CommentEntity(like)
    }
  }

  @Delete(':commentId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CommentEntity })
  async remove(
    @Param('commentId', ParseIntPipe) commentId: number,
  ): Promise<CommentEntity> {
    const comment = await this.commentsService.remove(commentId)

    return new CommentEntity(comment)
  }
  //
}
