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
import { DeCollectionLanguageInterceptor } from 'src/collections/interceptors/german.interceptor'

@ApiTags('Collections - Languages')
@UseInterceptors(DeCollectionLanguageInterceptor)
@Controller('collections')
// Class declaration
export class CollectionsDeController {
  // Constructor Method
  constructor(private readonly collectionsService: CollectionsService) {}
  //

  // Properties
  @Get('de')
  async findAll() {
    const collection = await this.collectionsService.findAll()
    return new CollectionEntity(collection)
  }

  @Get('de/:collectionId')
  async findOne(@Param('collectionId', ParseIntPipe) collectionId: number) {
    const collection = await this.collectionsService.findOne(collectionId)

    return new CollectionEntity(collection)
  }
  //
}
