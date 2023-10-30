import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { NewscategoryEntity } from '../../entities/newscategory.entity'
import { NewscategoryService } from '../../newscategory.service'
import { DeNewsCategoryLanguageInterceptor } from '../../interceptors/german.interceptor'

@Controller('news/category')
@ApiTags('News Category - Languages')
@UseInterceptors(DeNewsCategoryLanguageInterceptor)
export class NewsCategoryDeController {
  constructor(private readonly newsCategoryService: NewscategoryService) {}

  @Get('de')
  @ApiOkResponse({ type: NewscategoryEntity })
  findAll() {
    return this.newsCategoryService.findAll()
  }

  @Get('de/:id')
  @ApiOkResponse({ type: NewscategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsCategoryService.findOne(id)
  }
}
