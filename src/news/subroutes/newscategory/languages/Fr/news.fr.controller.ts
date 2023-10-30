import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { NewscategoryService } from '../../newscategory.service'
import { FrNewsCategoryLanguageInterceptor } from '../../interceptors/french.interceptor'
import { NewscategoryEntity } from '../../entities/newscategory.entity'

@Controller('news/category')
@ApiTags('News Category - Languages')
@UseInterceptors(FrNewsCategoryLanguageInterceptor)
export class NewsCategoryFrController {
  constructor(private readonly newsCategoryService: NewscategoryService) {}

  @Get('fr')
  @ApiOkResponse({ type: NewscategoryEntity })
  findAll() {
    return this.newsCategoryService.findAll()
  }

  @Get('fr/:id')
  @ApiOkResponse({ type: NewscategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsCategoryService.findOne(id)
  }
}
