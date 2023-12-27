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
export class PtBrCollectionsClothesLanguageInterceptor
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
            delete item.nameDe
            delete item.nameEn
            delete item.nameFr

            delete item.collection.descriptionDe
            delete item.collection.descriptionEn
            delete item.collection.descriptionFr

            delete item.collection.titleDe
            delete item.collection.titleEn
            delete item.collection.titleFr
          })
        } else {
          const item: CollectionClothesEntity = items

          delete item.nameDe
          delete item.nameEn
          delete item.nameFr

          delete item.collection.descriptionDe
          delete item.collection.descriptionEn
          delete item.collection.descriptionFr

          delete item.collection.titleDe
          delete item.collection.titleEn
          delete item.collection.titleFr
        }
      }),
    )
  }
}
