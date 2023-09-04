import { Controller, Get, Param, UseInterceptors } from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiTags } from '@nestjs/swagger'
import { DeCollectionsCategoryLanguageInterceptor } from 'src/collections-category/interceptors/german.interceptor'

@Controller('collections-category')
@ApiTags('Collectios Category')
@UseInterceptors(DeCollectionsCategoryLanguageInterceptor)
export class CollectionsCategoryDeController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('de')
  findAll() {
    const response = this.collectiosCategoryService.findAll()
    return response
  }

  @Get('de/:id')
  findOne(@Param('id') id: string) {
    return this.collectiosCategoryService.findOne(+id)
  }
}
