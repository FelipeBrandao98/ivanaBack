import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'

import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { CollectionClothesEntity } from '../../entities/collection-clothe.entity'
import { CollectionClothesService } from '../../collection-clothes.service'
import { EnCollectionsClothesLanguageInterceptor } from '../../interceptors/english.interceptor'

@Controller('collections/category')
@ApiTags('Collections Category')
@UseInterceptors(EnCollectionsClothesLanguageInterceptor)
export class CollectionsClothesEnController {
  constructor(
    private readonly collectionsClothesService: CollectionClothesService,
  ) {}

  @Get('en')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findAll() {
    const response = this.collectionsClothesService.findAll()
    return response
  }

  @Get('en/:id')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsClothesService.findOne(id)
  }
}
