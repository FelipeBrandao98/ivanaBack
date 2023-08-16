import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { NewscategoryService } from './newscategory.service'
import { CreateNewscategoryDto } from './dto/create-newscategory.dto'
import { UpdateNewscategoryDto } from './dto/update-newscategory.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('newscategory')
@ApiTags('News Category')
export class NewscategoryController {
  constructor(private readonly newscategoryService: NewscategoryService) {}

  @Post()
  create(@Body() createNewscategoryDto: CreateNewscategoryDto) {
    return this.newscategoryService.create(createNewscategoryDto)
  }

  @Get()
  findAll() {
    return this.newscategoryService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newscategoryService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNewscategoryDto: UpdateNewscategoryDto,
  ) {
    return this.newscategoryService.update(+id, updateNewscategoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newscategoryService.remove(+id)
  }
}
