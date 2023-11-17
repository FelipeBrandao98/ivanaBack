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
import { DeNewsCategoryLanguageInterceptor } from '../../interceptors/german.interceptor'

@ApiTags('News Category - Languages')
@UseInterceptors(DeNewsCategoryLanguageInterceptor)
@Controller('news/category')
export class NewsCategoryDeController {
  // Constructor Methods
  constructor(private readonly newsCategoryService: NewscategoryService) {}
  //

  @Get('de')
  @ApiOkResponse({ type: NewscategoryEntity })
  async findAll() {
    const newsCategory = await this.newsCategoryService.findAll()

    return newsCategory.map(
      (newsCategory) => new NewscategoryEntity(newsCategory),
    )
  }

  @Get('de/:newsCategoryId')
  @ApiOkResponse({ type: NewscategoryEntity })
  async findOne(@Param('newsCategoryId', ParseIntPipe) newsCategoryId: number) {
    const newsCategory = await this.newsCategoryService.findOne(newsCategoryId)

    return new NewscategoryEntity(newsCategory)
  }
}
