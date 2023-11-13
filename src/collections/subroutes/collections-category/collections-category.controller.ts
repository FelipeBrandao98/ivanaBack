// NestJs imports
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger'

// DTOs imports
import { CreateCollectionsCategoryDto } from './dto/create-collections-category.dto'
import { UpdateCollectionsCategoryDto } from './dto/update-collections-category.dto'

// Services imports
import { CollectionsCategoryService } from './collections-category.service'

// Entities imports
import { CollectionsCategoryEntity } from './entities/collections-category.entity'

// Secutiry imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Collections Category')
@Controller('collections/category')
// Class declaration
export class CollectionsCategoryController {
  // Contructor Method
  constructor(
    private readonly collectionsCategoryService: CollectionsCategoryService,
  ) {}
  //

  // Properties
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async findAll() {
    const collectionCategory = await this.collectionsCategoryService.findAll()

    return new CollectionsCategoryEntity(collectionCategory)
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async create(
    @Body() createCollectionsCategoryDto: CreateCollectionsCategoryDto,
  ) {
    const collectionCategory = await this.collectionsCategoryService.create(
      createCollectionsCategoryDto,
    )

    return new CollectionsCategoryEntity(collectionCategory)
  }

  @Patch(':collectionCategoryId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async update(
    @Param('collectionCategoryId', ParseIntPipe) collectionCategoryId: number,
    @Body() updateCollectionsCategoryDto: UpdateCollectionsCategoryDto,
  ) {
    const collectionCategory = await this.collectionsCategoryService.update(
      collectionCategoryId,
      updateCollectionsCategoryDto,
    )

    return new CollectionsCategoryEntity(collectionCategory)
  }

  @Delete(':collectionCategoryId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async remove(
    @Param('collectionCategoryId', ParseIntPipe) collectionCategoryId: number,
  ) {
    const collectionCategory = await this.collectionsCategoryService.remove(
      collectionCategoryId,
    )

    return new CollectionsCategoryEntity(collectionCategory)
  }
  //
}
