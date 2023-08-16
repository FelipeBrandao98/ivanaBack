import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { EventsService } from './events.service'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { EventsEntity } from './entities/event.entity'

@Controller('events')
@ApiTags('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiCreatedResponse({ type: EventsEntity })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto)
  }

  @Get()
  @ApiOkResponse({ type: EventsEntity, isArray: true })
  findAll() {
    return this.eventsService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: EventsEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.update(+id, updateEventDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: EventsEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.remove(+id)
  }
}
