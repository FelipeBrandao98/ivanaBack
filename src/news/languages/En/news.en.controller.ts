import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { NewsService } from 'src/news/news.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { EnNewsLanguageInterceptor } from 'src/news/interceptors/english.interceptor'
import { NewsEntity } from 'src/news/entities/news.entity'

@Controller('news')
@ApiTags('News - Languages')
@UseInterceptors(EnNewsLanguageInterceptor)
export class NewsEnController {
  constructor(private readonly newsService: NewsService) {}

  @Get('en')
  @ApiOkResponse({ type: NewsEntity })
  findAll() {
    return this.newsService.findAll()
  }

  @Get('latest/en')
  @ApiOkResponse({ type: NewsEntity })
  findLatests() {
    return this.newsService.findLatests()
  }

  @Get('en/:id')
  @ApiOkResponse({ type: NewsEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(id)
  }
}
