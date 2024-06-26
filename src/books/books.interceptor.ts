import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class BooksInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`this is the intercepter`)
    const ctx =  context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.title = "harray porter123";
    return next.handle().pipe(map(
      (data)=>{
        data.interceptor = "this is the interceptor";
        return data;
      }
    ));
  }
}
