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
import { PtBrCollectionsClothesLanguageInterceptor } from '../../interceptors/brazilian.interceptor'

@Controller('collections/clothes')
@ApiTags('Collections Clothes - Languages')
@UseInterceptors(PtBrCollectionsClothesLanguageInterceptor)
export class CollectionsClothesPtBrController {
  constructor(
    private readonly collectionsClothesService: CollectionClothesService,
  ) {}

  @Get('pt-BR')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findAll() {
    const response = this.collectionsClothesService.findAll()
    return response
  }

  @Get('pt-BR/:id')
  @ApiOkResponse({ type: CollectionClothesEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsClothesService.findOne(id)
  }
}
