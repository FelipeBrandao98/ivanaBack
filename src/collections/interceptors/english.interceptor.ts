// NestJs - interceptor imports
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

// EntitiesImports
import { CollectionEntity } from '../entities/collection.entity'

@Injectable()
export class EnCollectionLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionEntity[]) => {
        if (Array.isArray(items)) {
          items.map((item: CollectionEntity) => {
            item.description = item.descriptionEn
            delete item.descriptionDe
            delete item.descriptionEn
            delete item.descriptionFr

            item.title = item.titleEn
            delete item.titleDe
            delete item.titleEn
            delete item.titleFr

            item.category.description = item.category.descriptionEn
            delete item.category.descriptionDe
            delete item.category.descriptionEn
            delete item.category.descriptionFr

            item.category.subdescription = item.category.subdescriptionEn
            delete item.category.subdescriptionDe
            delete item.category.subdescriptionEn
            delete item.category.subdescriptionFr
          })
        } else {
          const item: CollectionEntity = items

          item.description = item.descriptionEn
          delete item.descriptionDe
          delete item.descriptionEn
          delete item.descriptionFr

          item.title = item.titleEn
          delete item.titleDe
          delete item.titleEn
          delete item.titleFr

          item.category.description = item.category.descriptionEn
          delete item.category.descriptionDe
          delete item.category.descriptionEn
          delete item.category.descriptionFr

          item.category.subdescription = item.category.subdescriptionEn
          delete item.category.subdescriptionDe
          delete item.category.subdescriptionEn
          delete item.category.subdescriptionFr
        }
      }),
    )
  }
}
