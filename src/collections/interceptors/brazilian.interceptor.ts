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
// Class declaration
export class PtBrCollectionLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionEntity[]) => {
        if (Array.isArray(items)) {
          items.map((item: CollectionEntity) => {
            delete item.descriptionDe
            delete item.descriptionEn
            delete item.descriptionFr

            delete item.titleDe
            delete item.titleEn
            delete item.titleFr

            delete item.category.descriptionDe
            delete item.category.descriptionEn
            delete item.category.descriptionFr

            delete item.category.subdescriptionDe
            delete item.category.subdescriptionEn
            delete item.category.subdescriptionFr
          })
        } else {
          const item: CollectionEntity = items

          delete item.descriptionDe
          delete item.descriptionEn
          delete item.descriptionFr

          delete item.titleDe
          delete item.titleEn
          delete item.titleFr

          delete item.category.descriptionDe
          delete item.category.descriptionEn
          delete item.category.descriptionFr

          delete item.category.subdescriptionDe
          delete item.category.subdescriptionEn
          delete item.category.subdescriptionFr
        }
      }),
    )
  }
}
