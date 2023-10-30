import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('collections/clothes')
@ApiTags('Collection Clothes')
export class CollectionClothesController {
  constructor(
    private readonly collectionClothesService: CollectionClothesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CollectionClothesEntity })
  create(@Body() createCollectionClotheDto: CreateCollectionClotheDto) {
    return this.collectionClothesService.create(createCollectionClotheDto)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  findAll() {
    return this.collectionClothesService.findAll()
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  findOne(@Param('id') id: string) {
    return this.collectionClothesService.findOne(+id)
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  update(
    @Param('id') id: string,
    @Body() updateCollectionClotheDto: UpdateCollectionClotheDto,
  ) {
    return this.collectionClothesService.update(id, updateCollectionClotheDto)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionClothesEntity })
  remove(@Param('id') id: string) {
    return this.collectionClothesService.remove(id)
  }
}
