import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Get,
} from '@nestjs/common'
import { NewscategoryService } from './newscategory.service'
import { CreateNewscategoryDto } from './dto/create-newscategory.dto'
import { UpdateNewscategoryDto } from './dto/update-newscategory.dto'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { NewscategoryEntity } from './entities/newscategory.entity'

@Controller('news/category')
@ApiTags('News Category')
export class NewscategoryController {
  constructor(private readonly newscategoryService: NewscategoryService) {}

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: NewscategoryEntity })
  findAll() {
    return this.newscategoryService.findAll()
  }

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: NewscategoryEntity })
  create(@Body() createNewscategoryDto: CreateNewscategoryDto) {
    return this.newscategoryService.create(createNewscategoryDto)
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: NewscategoryEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNewscategoryDto: UpdateNewscategoryDto,
  ) {
    return this.newscategoryService.update(id, updateNewscategoryDto)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: NewscategoryEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.newscategoryService.remove(id)
  }
}
