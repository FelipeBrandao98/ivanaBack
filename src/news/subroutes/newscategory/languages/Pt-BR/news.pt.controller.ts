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
import { NewscategoryService } from '../../newscategory.service'

// Entities imports
import { NewscategoryEntity } from '../../entities/newscategory.entity'

// Interceptors imports
import { PtBrNewsCategoryLanguageInterceptor } from '../../interceptors/brazilian.interceptor'

@ApiTags('News Category - Languages')
@UseInterceptors(PtBrNewsCategoryLanguageInterceptor)
@Controller('news/category')
export class NewsCategoryPtBrController {
  // Constructor Methods
  constructor(private readonly newsCategoryService: NewscategoryService) {}
  //

  @Get('pt-BR')
  @ApiOkResponse({ type: NewscategoryEntity })
  async findAll() {
    const newsCategory = await this.newsCategoryService.findAll()

    return newsCategory.map(
      (newsCategory) => new NewscategoryEntity(newsCategory),
    )
  }

  @Get('pt-BR/:newsCategoryId')
  @ApiOkResponse({ type: NewscategoryEntity })
  async findOne(@Param('newsCategoryId', ParseIntPipe) newsCategoryId: number) {
    const newsCategory = await this.newsCategoryService.findOne(newsCategoryId)

    return new NewscategoryEntity(newsCategory)
  }
}
