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
import { NewscategoryEntity } from '../entities/newscategory.entity'

@Injectable()
// Class declaration
export class FrNewsCategoryLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: NewscategoryEntity[]) => {
        items.map((item: NewscategoryEntity) => {
          item.description = item.descriptionFr
          delete item.descriptionDe
          delete item.descriptionEn
          delete item.descriptionFr
        })
      }),
    )
  }
}
