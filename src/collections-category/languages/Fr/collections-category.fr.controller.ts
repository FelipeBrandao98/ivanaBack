import { Controller, Get, Param } from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections-category')
@ApiTags('Collectios Category')
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
