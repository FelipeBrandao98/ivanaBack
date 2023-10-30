import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { FrCollectionsCategoryLanguageInterceptor } from '../../interceptors/french.interceptor'
import { CollectionsCategoryEntity } from '../../entities/collections-category.entity'

@Controller('collections/category')
@ApiTags('Collections Category - Languages')
@UseInterceptors(FrCollectionsCategoryLanguageInterceptor)
export class CollectionsCategoryFrController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('fr')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findAll() {
    return this.collectiosCategoryService.findAll()
  }

  @Get('fr/:id')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectiosCategoryService.findOne(id)
  }
}
