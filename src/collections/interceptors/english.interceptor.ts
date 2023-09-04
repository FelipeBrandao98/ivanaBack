import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CollectionEntity } from '../entities/collection.entity'

@Injectable()
export class EnCollectionLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionEntity[]) => {
        items.map((item: CollectionEntity) => {
          item.description = item.descriptionEn
          delete item.descriptionDe
          delete item.descriptionEn
          delete item.descriptionFr

          item.title = item.titleEn
          delete item.titleDe
          delete item.titleEn
          delete item.titleFr
        })
      }),
    )
  }
}
