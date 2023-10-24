import { Injectable } from '@nestjs/common'
import { CreateCollectionImageDto } from './dto/create-collection-image.dto'
import { UpdateCollectionImageDto } from './dto/update-collection-image.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import {
  GetObjectCommand,
  GetObjectCommandOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'
import { ConfigService } from '@nestjs/config'
import { randomUUID } from 'crypto'

@Injectable()
export class CollectionImagesService {
  private readonly s3Client = new S3Client({
    region: process.env.S3_REGION,
  })

  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  // CRUD Operators
  async create(
    createCollectionImageDto: CreateCollectionImageDto,
    file: Express.Multer.File,
  ) {
    const filename = `${file.originalname.split('.')[0]}-${randomUUID()}`

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: filename,
        Body: file.buffer,
        ContentEncoding: 'utf8',
      }),
    )

    createCollectionImageDto.src = filename
    createCollectionImageDto.url = `${process.env.SERVER_ADDRESS}/collections/images/${filename}`

    return this.prisma.collectionImages.create({
      data: createCollectionImageDto,
    })
  }

  async getImage(imgName: string) {
    const response: GetObjectCommandOutput = await this.s3Client.send(
      new GetObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: imgName,
      }),
    )

    return response.Body.transformToByteArray()
  }

  findAll() {
    return this.prisma.collectionImages.findMany({
      include: { collection: true },
    })
  }

  findOne(id: number) {
    return this.prisma.collectionImages.findUnique({
      where: { id: id },
      include: { collection: true },
    })
  }

  findByCollectionId(id: number) {
    return this.prisma.collectionImages.findMany({
      where: { collectionId: id },
    })
  }

  async update(
    id: number,
    updateCollectionImageDto: UpdateCollectionImageDto,
    file?: Express.Multer.File,
  ) {
    if (file) {
      const filename = `${file.originalname.split('.')[0]}-${randomUUID()}`

      await this.s3Client.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: filename,
          Body: file.buffer,
          ContentEncoding: 'utf8',
        }),
      )

      updateCollectionImageDto.src = filename
      updateCollectionImageDto.url = `${process.env.SERVER_ADDRESS}/collections/images/${filename}`

      return this.prisma.collectionImages.update({
        where: { id: id },
        data: updateCollectionImageDto,
        include: { collection: true },
      })
    } else {
      return this.prisma.collectionImages.update({
        where: { id: id },
        data: updateCollectionImageDto,
        include: { collection: true },
      })
    }
  }

  updateProps(id: number, updateCollectionImageDto: UpdateCollectionImageDto) {
    return this.prisma.collectionImages.update({
      where: { id: id },
      data: updateCollectionImageDto,
      include: { collection: true },
    })
  }

  remove(id: number) {
    return this.prisma.collectionImages.delete({ where: { id: id } })
  }
}
