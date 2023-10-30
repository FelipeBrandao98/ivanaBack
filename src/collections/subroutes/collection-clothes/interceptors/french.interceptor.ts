import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CollectionClothesEntity } from '../entities/collection-clothe.entity'

@Injectable()
export class FrCollectionsClothesLanguageInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      tap((items: CollectionClothesEntity[]) => {
        items.map((item: CollectionClothesEntity) => {
          item.name = item.nameFr

          delete item.nameDe
          delete item.nameFr
          delete item.nameEn
        })
      }),
    )
  }
}
