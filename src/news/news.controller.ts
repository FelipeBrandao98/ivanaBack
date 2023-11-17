// NestJs imports
import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  UseGuards,
} from '@nestjs/common'

// NestJs imports
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

// DTOs imports
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'

// Services imports
import { NewsService } from './news.service'

// Entities imports
import { NewsEntity } from './entities/news.entity'

// Security imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('News')
@Controller('news')
// Class declaration
export class NewsController {
  // Constructor Methods
  constructor(private readonly newsService: NewsService) {}
  //

  // Properties
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: NewsEntity })
  async findAll(): Promise<NewsEntity[]> {
    const news = await this.newsService.findAll()

    return news.map((news) => new NewsEntity(news))
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: NewsEntity })
  async create(@Body() createNewsDto: CreateNewsDto): Promise<NewsEntity> {
    const news = await this.newsService.create(createNewsDto)

    return new NewsEntity(news)
  }

  @Patch(':newsId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: NewsEntity })
  async update(
    @Param('newsId', ParseIntPipe) newsId: number,
    @Body() updateNewsDto: UpdateNewsDto,
  ): Promise<NewsEntity> {
    const news = await this.newsService.update(newsId, updateNewsDto)

    return new NewsEntity(news)
  }

  @Delete(':newsId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: NewsEntity })
  async remove(
    @Param('newsId', ParseIntPipe) newsId: number,
  ): Promise<NewsEntity> {
    const news = await this.newsService.remove(newsId)

    return new NewsEntity(news)
  }
  //
}
