export interface ColCatFr {
  id: number
  description?: string
  descriptionDe?: string | null
  descriptionEn?: string | null
  descriptionFr?: string | null
  subdescription?: string
  subdescriptionDe?: string | null
  subdescriptionEn?: string | null
  subdescriptionFr?: string | null
  coverId: number
  cover: ImagesEntity
  createdAt: Date
  updatedAt: Date
}
