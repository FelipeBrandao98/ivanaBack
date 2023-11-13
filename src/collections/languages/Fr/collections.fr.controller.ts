// NestJs imports
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiTags } from '@nestjs/swagger'

// Services imports
import { CollectionsService } from 'src/collections/collections.service'

// Entities imports
import { CollectionEntity } from 'src/collections/entities/collection.entity'

// Interceptors imports
import { FrCollectionLanguageInterceptor } from 'src/collections/interceptors/french.interceptor'

@ApiTags('Collections - Languages')
@UseInterceptors(FrCollectionLanguageInterceptor)
@Controller('collections')
// Class declaration
export class CollectionsFrController {
  // Constructor Method
  constructor(private readonly collectionsService: CollectionsService) {}
  //

  // Properties
  @Get('fr')
  async findAll() {
    const collection = await this.collectionsService.findAll()

    return new CollectionEntity(collection)
  }

  @Get('fr/:collectionId')
  async findOne(@Param('collectionId', ParseIntPipe) collectionId: number) {
    const collection = await this.collectionsService.findOne(collectionId)

    return new CollectionEntity(collection)
  }
  //
}
