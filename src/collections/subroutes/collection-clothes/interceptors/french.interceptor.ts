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
import { CollectionClothesEntity } from '../entities/collection-clothe.entity'

@Injectable()
export class FrCollectionsClothesLanguageInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionClothesEntity[]) => {
        if (Array.isArray(items)) {
          items.map((item: CollectionClothesEntity) => {
            item.name = item.nameFr
            delete item.nameDe
            delete item.nameFr
            delete item.nameEn

            item.collection.description = item.collection.descriptionFr
            delete item.collection.descriptionDe
            delete item.collection.descriptionEn
            delete item.collection.descriptionFr

            item.collection.title = item.collection.titleFr
            delete item.collection.titleDe
            delete item.collection.titleEn
            delete item.collection.titleFr
          })
        } else {
          const item: CollectionClothesEntity = items
          item.name = item.nameFr
          delete item.nameDe
          delete item.nameFr
          delete item.nameEn

          item.collection.description = item.collection.descriptionFr
          delete item.collection.descriptionDe
          delete item.collection.descriptionEn
          delete item.collection.descriptionFr

          item.collection.title = item.collection.titleFr
          delete item.collection.titleDe
          delete item.collection.titleEn
          delete item.collection.titleFr
        }
      }),
    )
  }
}
