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
export class DeCollectionLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionEntity[]) => {
        items.map((item: CollectionEntity) => {
          item.title = item.titleDe
          delete item.titleDe
          delete item.titleEn
          delete item.titleFr

          item.description = item.descriptionDe
          delete item.descriptionFr
          delete item.descriptionDe
          delete item.descriptionEn
        })
      }),
    )
  }
}
