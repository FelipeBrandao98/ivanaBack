import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { NewsEntity } from '../entities/news.entity'

@Injectable()
export class PtBrNewsLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: NewsEntity[]) => {
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

          delete item.newscategory.descriptionDe
          delete item.newscategory.descriptionEn
          delete item.newscategory.descriptionFr
        })
      }),
    )
  }
}
