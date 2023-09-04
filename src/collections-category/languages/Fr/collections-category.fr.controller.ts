import { Controller, Get, Param, UseInterceptors } from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiTags } from '@nestjs/swagger'
import { FrCollectionsCategoryLanguageInterceptor } from 'src/collections-category/interceptors/french.interceptor'

@Controller('collections-category')
@ApiTags('Collectios Category')
@UseInterceptors(FrCollectionsCategoryLanguageInterceptor)
export class CollectionsCategoryFrController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('fr')
  findAll() {
    return this.collectiosCategoryService.findAll()
  }

  @Get('fr/:id')
  findOne(@Param('id') id: string) {
    return this.collectiosCategoryService.findOne(+id)
  }
}
