// NestJs imports
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

// Services imports
import { CollectionClothesService } from '../../collection-clothes.service'

// Entities imports
import { CollectionClothesEntity } from '../../entities/collection-clothe.entity'

// Interceptors imports
import { PtBrCollectionsClothesLanguageInterceptor } from '../../interceptors/brazilian.interceptor'

@ApiTags('Collections Clothes - Languages')
@UseInterceptors(PtBrCollectionsClothesLanguageInterceptor)
@Controller('collections/clothes')
// Class declaration
export class CollectionsClothesPtBrController {
  // Constructor Methods
  constructor(
    private readonly collectionsClothesService: CollectionClothesService,
  ) {}
  //

  // Properties
  @Get('pt-BR/:collectionId')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findAll(@Param('collectionId', ParseIntPipe) collectionId: number) {
    const collectionsClothes = await this.collectionsClothesService.findAll(
      collectionId,
    )

    return collectionsClothes.map(
      (collectionClothes) => new CollectionClothesEntity(collectionClothes),
    )
  }

  @Get('pt-BR/:collectionClothesId')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findOne(
    @Param('collectionClothesId', ParseIntPipe) collectionClothesId: number,
  ) {
    const collectionClothes = await this.collectionsClothesService.findOne(
      collectionClothesId,
    )

    return new CollectionClothesEntity(collectionClothes)
  }
  //
}
