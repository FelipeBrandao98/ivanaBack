import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { NewscategoryEntity } from '../entities/newscategory.entity'

@Injectable()
export class DeNewsCategoryLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: NewscategoryEntity[]) => {
        items.map((item: NewscategoryEntity) => {
          item.description = item.descriptionDe
          delete item.descriptionDe
          delete item.descriptionEn
          delete item.descriptionFr
        })
      }),
    )
  }
}