import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { NewscategoryService } from '../../newscategory.service'
import { EnNewsCategoryLanguageInterceptor } from '../../interceptors/english.interceptor'
import { NewscategoryEntity } from '../../entities/newscategory.entity'

@Controller('news/category')
@ApiTags('News Category')
@UseInterceptors(EnNewsCategoryLanguageInterceptor)
export class NewsCategoryEnController {
  constructor(private readonly newsCategoryService: NewscategoryService) {}

  @Get('en')
  @ApiOkResponse({ type: NewscategoryEntity })
  findAll() {
    return this.newsCategoryService.findAll()
  }

  @Get('en/:id')
  @ApiOkResponse({ type: NewscategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsCategoryService.findOne(id)
  }
}
