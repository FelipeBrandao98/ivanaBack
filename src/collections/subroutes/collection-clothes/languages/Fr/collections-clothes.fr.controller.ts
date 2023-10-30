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
import { FrCollectionsClothesLanguageInterceptor } from '../../interceptors/french.interceptor'

@Controller('collections/clothes')
@ApiTags('Collections Clothes - Languages')
@UseInterceptors(FrCollectionsClothesLanguageInterceptor)
export class CollectionsClothesFrController {
  constructor(
    private readonly collectionsClothesService: CollectionClothesService,
  ) {}

  @Get('fr')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findAll() {
    const response = this.collectionsClothesService.findAll()
    return response
  }

  @Get('fr/:id')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsClothesService.findOne(id)
  }
}
