import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CollectiosCategoryService } from './collectios-category.service'
import { CreateCollectiosCategoryDto } from './dto/create-collectios-category.dto'
import { UpdateCollectiosCategoryDto } from './dto/update-collectios-category.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections-category')
@ApiTags('Collectios Category')
export class CollectiosCategoryController {
  constructor(
    private readonly collectiosCategoryService: CollectiosCategoryService,
  ) {}

  @Post()
  create(@Body() createCollectiosCategoryDto: CreateCollectiosCategoryDto) {
    return this.collectiosCategoryService.create(createCollectiosCategoryDto)
  }

  @Get()
  findAll() {
    return this.collectiosCategoryService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectiosCategoryService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectiosCategoryDto: UpdateCollectiosCategoryDto,
  ) {
    return this.collectiosCategoryService.update(
      +id,
      updateCollectiosCategoryDto,
    )
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectiosCategoryService.remove(+id)
  }
}
