import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { NewsService } from 'src/news/news.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { PtBrNewsLanguageInterceptor } from 'src/news/interceptors/brazilian.interceptor'
import { NewsEntity } from 'src/news/entities/news.entity'

@Controller('news')
@ApiTags('News - Languages')
@UseInterceptors(PtBrNewsLanguageInterceptor)
export class NewsPtBrController {
  constructor(private readonly newsService: NewsService) {}

  @Get('pt-BR')
  @ApiOkResponse({ type: NewsEntity })
  findAll() {
    return this.newsService.findAll()
  }

  @Get('latest/pt-BR')
  @ApiOkResponse({ type: NewsEntity })
  findLatests() {
    return this.newsService.findLatests()
  }

  @Get('pt-BR/:id')
  @ApiOkResponse({ type: NewsEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(id)
  }
}
