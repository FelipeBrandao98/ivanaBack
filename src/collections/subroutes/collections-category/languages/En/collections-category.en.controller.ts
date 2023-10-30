import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { EnCollectionsCategoryLanguageInterceptor } from '../../interceptors/english.interceptor'
import { CollectionsCategoryEntity } from '../../entities/collections-category.entity'

@Controller('collections/category')
@ApiTags('Collections Category - Languages')
@UseInterceptors(EnCollectionsCategoryLanguageInterceptor)
export class CollectionsCategoryEnController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('en')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findAll() {
    return this.collectiosCategoryService.findAll()
  }

  @Get('en/:id')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectiosCategoryService.findOne(id)
  }
}
