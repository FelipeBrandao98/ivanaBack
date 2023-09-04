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
import { CommentsService } from './comments.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { CommentEntity } from './entities/comment.entity'

@Controller('comments')
@ApiTags('Comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOkResponse({ type: CommentEntity })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto)
  }

  @Get()
  @ApiOkResponse({ type: CommentEntity })
  findAll() {
    return this.commentsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.findOne(id)
  }

  @Patch(':id')
  @ApiOkResponse({ type: CommentEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(id, updateCommentDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: CommentEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.remove(id)
  }
}
