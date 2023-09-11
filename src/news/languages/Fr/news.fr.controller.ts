import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { NewsService } from 'src/news/news.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { FrNewsLanguageInterceptor } from 'src/news/interceptors/french.interceptor'
import { NewsEntity } from 'src/news/entities/news.entity'

@Controller('news')
@ApiTags('News')
@UseInterceptors(FrNewsLanguageInterceptor)
export class NewsFrController {
  constructor(private readonly newsService: NewsService) {}

  @Get('fr')
  @ApiOkResponse({ type: NewsEntity })
  findAll() {
    return this.newsService.findAll()
  }

  @Get('latest/fr')
  @ApiOkResponse({ type: NewsEntity })
  findLatests() {
    return this.newsService.findLatests()
  }

  @Get('fr/:id')
  @ApiOkResponse({ type: NewsEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(id)
  }
}
