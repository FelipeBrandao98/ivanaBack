// NestJs imports
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

// Services imports
import { NewsService } from 'src/news/news.service'

// Entities imports
import { NewsEntity } from 'src/news/entities/news.entity'

// Interceptors imports
import { DeNewsLanguageInterceptor } from 'src/news/interceptors/german.interceptor'

@ApiTags('News - Languages')
@UseInterceptors(DeNewsLanguageInterceptor)
@Controller('news')
// Class declaration
export class NewsDeController {
  // Constructor Methods
  constructor(private readonly newsService: NewsService) {}
  //

  // Properties
  @Get('de')
  @ApiOkResponse({ type: NewsEntity })
  async findAll(): Promise<NewsEntity[]> {
    const news = await this.newsService.findAll()

    return news.map((news) => new NewsEntity(news))
  }

  @Get('latest/de')
  @ApiOkResponse({ type: NewsEntity })
  async findLatests(): Promise<NewsEntity[]> {
    const news = await this.newsService.findLatests()

    return news.map((news) => new NewsEntity(news))
  }

  @Get('de/:newsId')
  @ApiOkResponse({ type: NewsEntity })
  async findOne(
    @Param('newsId', ParseIntPipe) newsId: number,
  ): Promise<NewsEntity> {
    const news = await this.newsService.findOne(newsId)

    return new NewsEntity(news)
  }
  //
}
