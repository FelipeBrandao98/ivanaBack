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
import { TracklistService } from './tracklist.service'
import { CreateTracklistDto } from './dto/create-tracklist.dto'
import { UpdateTracklistDto } from './dto/update-tracklist.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { TracklistEntity } from './entities/tracklist.entity'

@ApiTags('Track List')
@Controller('tracklist')
export class TracklistController {
  constructor(private readonly tracklistService: TracklistService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createTracklistDto: CreateTracklistDto) {
    return this.tracklistService.create(createTracklistDto)
  }

  @Get()
  findAll() {
    return this.tracklistService.findAll()
  }

  @Get('homesong')
  async findHomeSong() {
    const [track] = await this.tracklistService.getHomeSong()

    return new TracklistEntity(track)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tracklistService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTracklistDto: UpdateTracklistDto,
  ) {
    return this.tracklistService.update(+id, updateTracklistDto)
  }

  @Patch('homesong/:tracklistId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async switchHomeSong(
    @Param('tracklistId', ParseIntPipe) tracklistId: number,
  ) {
    const songs = await this.tracklistService.findAll()

    songs.map(async (song) => {
      if (song.isHomeSong === true) {
        await this.tracklistService.removeToHomeSong(song.id)
      }
    })

    const trackList = await this.tracklistService.switchToHomeSong(tracklistId)
    return new TracklistEntity(trackList)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tracklistService.remove(+id)
  }
}
