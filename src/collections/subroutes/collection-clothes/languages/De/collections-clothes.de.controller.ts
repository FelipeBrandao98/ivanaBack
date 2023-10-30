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
import { DeCollectionsClothesLanguageInterceptor } from '../../interceptors/german.interceptor'

@Controller('collections/clothes')
@ApiTags('Collections Clothes - Languages')
@UseInterceptors(DeCollectionsClothesLanguageInterceptor)
export class CollectionsClothesDeController {
  constructor(
    private readonly collectionsClothesService: CollectionClothesService,
  ) {}

  @Get('de')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findAll() {
    const response = this.collectionsClothesService.findAll()
    return response
  }

  @Get('de/:id')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsClothesService.findOne(id)
  }
}
