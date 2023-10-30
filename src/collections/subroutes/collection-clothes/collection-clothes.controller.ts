import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CollectionClothesService } from './collection-clothes.service'
import { CreateCollectionClotheDto } from './dto/create-collection-clothe.dto'
import { UpdateCollectionClotheDto } from './dto/update-collection-clothe.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { CollectionClothesEntity } from './entities/collection-clothe.entity'

@Controller('collections/clothes')
@ApiTags('Collection Clothes')
export class CollectionClothesController {
  constructor(
    private readonly collectionClothesService: CollectionClothesService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CollectionClothesEntity })
  create(@Body() createCollectionClotheDto: CreateCollectionClotheDto) {
    return this.collectionClothesService.create(createCollectionClotheDto)
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  findAll() {
    return this.collectionClothesService.findAll()
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  findOne(@Param('id') id: string) {
    return this.collectionClothesService.findOne(+id)
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  update(
    @Param('id') id: string,
    @Body() updateCollectionClotheDto: UpdateCollectionClotheDto,
  ) {
    return this.collectionClothesService.update(id, updateCollectionClotheDto)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  remove(@Param('id') id: string) {
    return this.collectionClothesService.remove(id)
  }
}
