import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { CollectionsCategoryEntity } from '../entities/collections-category.entity'

@Injectable()
export class EnCollectionsCategoryLanguageInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionsCategoryEntity[]) => {
        items.map((item: CollectionsCategoryEntity) => {
          item.description = item.descriptionEn
          delete item.descriptionFr
          delete item.descriptionDe
          delete item.descriptionEn

          item.subdescription = item.subdescriptionEn
          delete item.subdescriptionFr
          delete item.subdescriptionDe
          delete item.subdescriptionEn
        })
      }),
    )
  }
}
