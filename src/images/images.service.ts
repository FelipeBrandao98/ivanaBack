import { Injectable } from '@nestjs/common'
import { CreateImageDto } from './dto/create-image.dto'
import { UpdateImageDto } from './dto/update-image.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import {
  GetObjectCommand,
  GetObjectCommandOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'

@Injectable()
export class ImagesService {
  private readonly s3Client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESSKEY,
    },
  })

  constructor(private prisma: PrismaService) {}

  // CRUD Operators
  async create(createImageDto: CreateImageDto, file: Express.Multer.File) {
    const filename = `${file.originalname.split('.')[0]}-${randomUUID()}`

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: filename,
        Body: file.buffer,
        ContentEncoding: 'utf8',
      }),
    )

    createImageDto.src = filename
    createImageDto.url = `${process.env.SERVER_ADDRESS}/images/${filename}`

    return this.prisma.image.create({ data: createImageDto })
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

  findOne(id: number) {
    return this.prisma.image.findUnique({
      where: { id: id },
    })
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return this.prisma.image.update({
      where: { id: id },
      data: updateImageDto,
    })
  }

  remove(id: number) {
    return this.prisma.image.delete({
      where: { id: id },
    })
  }
}
