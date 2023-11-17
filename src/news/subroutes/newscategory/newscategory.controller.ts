// NestJs imports
import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  UseGuards,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'

// DTOs imports
import { CreateNewscategoryDto } from './dto/create-newscategory.dto'
import { UpdateNewscategoryDto } from './dto/update-newscategory.dto'

// Services imports
import { NewscategoryService } from './newscategory.service'

// Entities imports
import { NewscategoryEntity } from './entities/newscategory.entity'

// Security imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('News Category')
@Controller('news/category')
// Class declaration
export class NewscategoryController {
  // Constructor Methods
  constructor(private readonly newscategoryService: NewscategoryService) {}
  //

  // Properties
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: NewscategoryEntity })
  async findAll(): Promise<NewscategoryEntity[]> {
    const newsCategory = await this.newscategoryService.findAll()

    return newsCategory.map(
      (newsCategory) => new NewscategoryEntity(newsCategory),
    )
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: NewscategoryEntity })
  async create(
    @Body() createNewscategoryDto: CreateNewscategoryDto,
  ): Promise<NewscategoryEntity> {
    const newsCategory = await this.newscategoryService.create(
      createNewscategoryDto,
    )

    return new NewscategoryEntity(newsCategory)
  }

  @Patch(':newsCategoryId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: NewscategoryEntity })
  async update(
    @Param('newsCategoryId', ParseIntPipe) newsCategoryId: number,
    @Body() updateNewscategoryDto: UpdateNewscategoryDto,
  ): Promise<NewscategoryEntity> {
    const newsCategory = await this.newscategoryService.update(
      newsCategoryId,
      updateNewscategoryDto,
    )

    return new NewscategoryEntity(newsCategory)
  }

  @Delete(':newsCategoryId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: NewscategoryEntity })
  async remove(
    @Param('newsCategoryId', ParseIntPipe) newsCategoryId: number,
  ): Promise<NewscategoryEntity> {
    const newsCategory = await this.newscategoryService.remove(newsCategoryId)

    return new NewscategoryEntity(newsCategory)
  }
}
