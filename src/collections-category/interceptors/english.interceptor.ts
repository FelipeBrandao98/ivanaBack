import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { ColCatFr } from './ColCat'

@Injectable()
export class EnCollectionsCategoryLanguageInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: ColCatFr[]) => {
        items.map((item: ColCatFr) => {
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
