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
export class EnNewsLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: NewsEntity[]) => {
        items.map((item: NewsEntity) => {
          item.title = item.titleEn
          delete item.titleDe
          delete item.titleEn
          delete item.titleFr

          item.coverCredit = item.coverCreditEn
          delete item.coverCreditDe
          delete item.coverCreditEn
          delete item.coverCreditFr

          item.subtitle = item.subtitleEn
          delete item.subtitleDe
          delete item.subtitleEn
          delete item.subtitleFr

          item.body = item.bodyEn
          delete item.bodyDe
          delete item.bodyEn
          delete item.bodyFr

          item.category.description = item.category.descriptionEn
          delete item.category.descriptionDe
          delete item.category.descriptionEn
          delete item.category.descriptionFr
        })
      }),
    )
  }
}
