// NestJs imports
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

// Entities imports
import { NewsEntity } from '../entities/news.entity'

@Injectable()
// Class declaration
export class PtBrNewsLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: NewsEntity[]) => {
        if (Array.isArray(items)) {
          items.map((item: NewsEntity) => {
            delete item.titleDe
            delete item.titleEn
            delete item.titleFr
            delete item.coverCreditDe
            delete item.coverCreditEn
            delete item.coverCreditFr
            delete item.subtitleDe
            delete item.subtitleEn
            delete item.subtitleFr
            delete item.bodyDe
            delete item.bodyEn
            delete item.bodyFr
            delete item.category.descriptionDe
            delete item.category.descriptionEn
            delete item.category.descriptionFr
          })
        } else {
          const item: NewsEntity = items

          delete item.titleDe
          delete item.titleEn
          delete item.titleFr
          delete item.coverCreditDe
          delete item.coverCreditEn
          delete item.coverCreditFr
          delete item.subtitleDe
          delete item.subtitleEn
          delete item.subtitleFr
          delete item.bodyDe
          delete item.bodyEn
          delete item.bodyFr
          delete item.category.descriptionDe
          delete item.category.descriptionEn
          delete item.category.descriptionFr
        }
      }),
    )
  }
}
