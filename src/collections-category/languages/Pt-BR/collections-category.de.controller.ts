import { Controller, Get, Param } from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections-category')
@ApiTags('Collectios Category')
export class CollectionsCategoryPtBrController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('pt-BR')
  findAll() {
    return this.collectiosCategoryService.findAll()
  }

  @Get('pt-BR/:id')
  findOne(@Param('id') id: string) {
    return this.collectiosCategoryService.findOne(+id)
  }
}
