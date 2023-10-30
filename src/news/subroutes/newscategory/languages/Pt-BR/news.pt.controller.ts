import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { NewscategoryService } from '../../newscategory.service'
import { PtBrNewsCategoryLanguageInterceptor } from '../../interceptors/brazilian.interceptor'
import { NewscategoryEntity } from '../../entities/newscategory.entity'

@Controller('news/category')
@ApiTags('News Category - Languages')
@UseInterceptors(PtBrNewsCategoryLanguageInterceptor)
export class NewsCategoryPtBrController {
  constructor(private readonly newsCategoryService: NewscategoryService) {}

  @Get('pt-BR')
  @ApiOkResponse({ type: NewscategoryEntity })
  findAll() {
    return this.newsCategoryService.findAll()
  }

  @Get('pt-BR/:id')
  @ApiOkResponse({ type: NewscategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsCategoryService.findOne(id)
  }
}
