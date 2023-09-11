import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { NewsService } from 'src/news/news.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { DeNewsLanguageInterceptor } from 'src/news/interceptors/german.interceptor'
import { NewsEntity } from 'src/news/entities/news.entity'

@Controller('news')
@ApiTags('News')
@UseInterceptors(DeNewsLanguageInterceptor)
export class NewsDeController {
  constructor(private readonly newsService: NewsService) {}

  @Get('de')
  @ApiOkResponse({ type: NewsEntity })
  findAll() {
    return this.newsService.findAll()
  }

  @Get('latest/de')
  @ApiOkResponse({ type: NewsEntity })
  findLatests() {
    return this.newsService.findLatests()
  }

  @Get('de/:id')
  @ApiOkResponse({ type: NewsEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(id)
  }
}
