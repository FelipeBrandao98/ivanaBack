import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsService } from 'src/collections/collections.service'
import { ApiTags } from '@nestjs/swagger'
import { FrCollectionLanguageInterceptor } from 'src/collections/interceptors/french.interceptor'

@Controller('collections')
@ApiTags('Collections - Languages')
@UseInterceptors(FrCollectionLanguageInterceptor)
export class CollectionsFrController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('fr')
  findAll() {
    return this.collectionsService.findAll()
  }

  @Get('fr/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsService.findOne(id)
  }
}
