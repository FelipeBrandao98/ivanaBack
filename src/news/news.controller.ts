import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { NewsService } from './news.service'
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { NewsEntity } from './entities/news.entity'

@Controller('news')
@ApiTags('News')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: NewsEntity })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto)
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: NewsEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    return this.newsService.update(id, updateNewsDto)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: NewsEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.remove(id)
  }
}
