import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { AvaliationsService } from './avaliations.service'
import { CreateAvaliationDto } from './dto/create-avaliation.dto'
import { UpdateAvaliationDto } from './dto/update-avaliation.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('avaliations')
@ApiTags('Avaliations')
export class AvaliationsController {
  constructor(private readonly avaliationsService: AvaliationsService) {}

  @Post()
  create(@Body() createAvaliationDto: CreateAvaliationDto) {
    return this.avaliationsService.create(createAvaliationDto)
  }

  @Get()
  findAll() {
    return this.avaliationsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliationsService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAvaliationDto: UpdateAvaliationDto,
  ) {
    return this.avaliationsService.update(+id, updateAvaliationDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliationsService.remove(+id)
  }
}
