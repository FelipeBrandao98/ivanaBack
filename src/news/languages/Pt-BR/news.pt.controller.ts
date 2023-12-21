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
import { PtBrNewsLanguageInterceptor } from 'src/news/interceptors/brazilian.interceptor'

@ApiTags('News - Languages')
@UseInterceptors(PtBrNewsLanguageInterceptor)
@Controller('news')
// Class declaration
export class NewsPtBrController {
  // Constructor Methods
  constructor(private readonly newsService: NewsService) {}
  //

  // Properties
  @Get('pt-BR')
  @ApiOkResponse({ type: NewsEntity })
  async findAll(): Promise<NewsEntity[]> {
    const news = await this.newsService.findAll()

    return news.map((news) => new NewsEntity(news))
  }

  @Get('latest/pt-BR')
  @ApiOkResponse({ type: NewsEntity })
  async findLatests(): Promise<NewsEntity[]> {
    const news = await this.newsService.findLatests()

    return news.map((news) => new NewsEntity(news))
  }

  @Get('pt-BR/:newsId')
  @ApiOkResponse({ type: NewsEntity })
  async findOne(
    @Param('newsId', ParseIntPipe) newsId: number,
  ): Promise<NewsEntity> {
    const news = await this.newsService.findOne(newsId)

    return new NewsEntity(news)
  }

  @Get('pt-BR/category/:categoryId')
  @ApiOkResponse({ type: NewsEntity })
  async findAllByCat(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<NewsEntity[]> {
    const news = await this.newsService.findByCategory(categoryId)

    return news.map((news) => new NewsEntity(news))
  }

  @Get('pt-BR/page/:page')
  @ApiOkResponse({ type: NewsEntity })
  async findAllWithPage(
    @Param('page', ParseIntPipe) page: number,
  ): Promise<NewsEntity[]> {
    const news = await this.newsService.findAll(page)

    return news.map((news) => new NewsEntity(news))
  }

  @Get('pt-BR/page/:page/categoryId/:categoryId')
  @ApiOkResponse({ type: NewsEntity })
  async findAllByCategory(
    @Param('page', ParseIntPipe) page: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<NewsEntity[]> {
    const news = await this.newsService.findByCategory(categoryId, page)

    return news.map((news) => new NewsEntity(news))
  }
  //
}
