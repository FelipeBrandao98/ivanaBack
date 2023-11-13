// NestJs imports
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
// Class declaration
export class PtBrCollectionLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionEntity[]) => {
        items.map((item: CollectionEntity) => {
          delete item.descriptionDe
          delete item.descriptionEn
          delete item.descriptionFr

          delete item.titleDe
          delete item.titleEn
          delete item.titleFr
        })
      }),
    )
  }
}
