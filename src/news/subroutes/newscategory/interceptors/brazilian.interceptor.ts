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
export class PtBrNewsCategoryLanguageInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: NewscategoryEntity[]) => {
        if (Array.isArray(items)) {
          items.map((item: NewscategoryEntity) => {
            delete item.descriptionDe
            delete item.descriptionEn
            delete item.descriptionFr
          })
        } else {
          const item: NewscategoryEntity = items

          delete item.descriptionDe
          delete item.descriptionEn
          delete item.descriptionFr
        }
      }),
    )
  }
}
