import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsService } from 'src/collections/collections.service'
import { ApiTags } from '@nestjs/swagger'
import { EnCollectionLanguageInterceptor } from 'src/collections/interceptors/english.interceptor'

@Controller('collections')
@ApiTags('Collections - Languages')
@UseInterceptors(EnCollectionLanguageInterceptor)
export class CollectionsEnController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('en')
  findAll() {
    return this.collectionsService.findAll()
  }

  @Get('en/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsService.findOne(id)
  }
}
