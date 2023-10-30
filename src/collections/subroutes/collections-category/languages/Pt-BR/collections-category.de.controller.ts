import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { PtBrCollectionsCategoryLanguageInterceptor } from '../../interceptors/brazilian.interceptor'
import { CollectionsCategoryEntity } from '../../entities/collections-category.entity'

@Controller('collections/category')
@ApiTags('Collections Category - Languages')
@UseInterceptors(PtBrCollectionsCategoryLanguageInterceptor)
export class CollectionsCategoryPtBrController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('pt-BR')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findAll() {
    return this.collectiosCategoryService.findAll()
  }

  @Get('pt-BR/:id')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectiosCategoryService.findOne(id)
  }
}
