// NestJs imports
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common'

// NestJs - Swagger imports
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

// DTOs imports
import { CreateCollectionClotheDto } from './dto/create-collection-clothe.dto'
import { UpdateCollectionClotheDto } from './dto/update-collection-clothe.dto'

// Services imports
import { CollectionClothesService } from './collection-clothes.service'

// Entities imports
import { CollectionClothesEntity } from './entities/collection-clothe.entity'

// Security imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Collections Clothes')
@Controller('collections/clothes')
// Class declaration
export class CollectionClothesController {
  // Constructor Method
  constructor(
    private readonly collectionClothesService: CollectionClothesService,
  ) {}
  //

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: CollectionClothesEntity })
  async create(
    @Body() createCollectionClotheDto: CreateCollectionClotheDto,
  ): Promise<CollectionClothesEntity> {
    const collectionClothes = await this.collectionClothesService.create(
      createCollectionClotheDto,
    )

    return new CollectionClothesEntity(collectionClothes)
  }

  @Get(':collectionId/product')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findProducts(
    @Param('collectionId', ParseIntPipe) collectionId: number,
  ): Promise<CollectionClothesEntity[]> {
    const collectionsClothes = await this.collectionClothesService.findProducts(
      collectionId,
    )

    return collectionsClothes.map(
      (collectionClothes) => new CollectionClothesEntity(collectionClothes),
    )
  }

  @Get(':collectionId')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findAll(
    @Param('collectionId', ParseIntPipe) collectionId: number,
  ): Promise<CollectionClothesEntity[]> {
    const collectionsClothes = await this.collectionClothesService.findAll(
      collectionId,
    )

    return collectionsClothes.map(
      (collectionClothes) => new CollectionClothesEntity(collectionClothes),
    )
  }

  @Get(':collectionClothesId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findOne(
    @Param('collectionClothesId', ParseIntPipe) collectionClothesId: number,
  ): Promise<CollectionClothesEntity> {
    const collectionClothes = await this.collectionClothesService.findOne(
      collectionClothesId,
    )

    return new CollectionClothesEntity(collectionClothes)
  }

  @Patch(':collectionClothesId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionClothesEntity })
  async update(
    @Param('collectionClothesId', ParseIntPipe) collectionClothesId: number,
    @Body() updateCollectionClotheDto: UpdateCollectionClotheDto,
  ): Promise<CollectionClothesEntity> {
    const collectionClothes = await this.collectionClothesService.update(
      collectionClothesId,
      updateCollectionClotheDto,
    )

    return new CollectionClothesEntity(collectionClothes)
  }

  @Delete(':collectionClothesId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionClothesEntity })
  async remove(
    @Param('collectionClothesId', ParseIntPipe) collectionClothesId: number,
  ): Promise<CollectionClothesEntity> {
    const collectionClothes = await this.collectionClothesService.remove(
      collectionClothesId,
    )

    return new CollectionClothesEntity(collectionClothes)
  }
}
