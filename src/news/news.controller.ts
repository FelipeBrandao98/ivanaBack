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
import { NewsService } from './news.service'
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { NewsEntity } from './entities/news.entity'

@Controller('news')
@ApiTags('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiCreatedResponse({ type: NewsEntity })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto)
  }

  @Get()
  @ApiOkResponse({ type: NewsEntity, isArray: true })
  findAll() {
    return this.newsService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: NewsEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    return this.newsService.update(id, updateNewsDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: NewsEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.remove(id)
  }
}
