import { Injectable } from '@nestjs/common'
import { CreateTracklistDto } from './dto/create-tracklist.dto'
import { UpdateTracklistDto } from './dto/update-tracklist.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { TracklistEntity } from './entities/tracklist.entity'

@Injectable()
export class TracklistService {
  // Constructor Methods
  constructor(private prisma: PrismaService) {}
  //

  create(createTracklistDto: CreateTracklistDto) {
    return this.prisma.trackList.create({ data: createTracklistDto })
  }

  async findAll(): Promise<TracklistEntity[]> {
    return this.prisma.trackList.findMany({ include: { audio: true } })
  }

  findOne(id: number) {
    return `This action returns a #${id} tracklist`
  }

  update(trackListId: number, updateTracklistDto: UpdateTracklistDto) {
    return this.prisma.trackList.update({
      where: { id: trackListId },
      data: updateTracklistDto,
    })
  }

  switchToHomeSong(trackListId: number) {
    return this.prisma.trackList.update({
      where: { id: trackListId },
      data: { isHomeSong: true },
    })
  }

  removeToHomeSong(trackListId: number) {
    return this.prisma.trackList.update({
      where: { id: trackListId },
      data: { isHomeSong: false },
    })
  }

  async getHomeSong() {
    return await this.prisma.trackList.findMany({
      where: { isHomeSong: true },
      include: { audio: true },
    })
  }

  remove(trackListId: number) {
    return this.prisma.trackList.delete({ where: { id: trackListId } })
  }
}
