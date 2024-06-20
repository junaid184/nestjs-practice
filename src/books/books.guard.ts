import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BooksGuard implements CanActivate {
  private key: string = `sanukey`
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(`guard is running`)
    const ctx =  context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if(request.headers['key'] === this.key)
      {
        return true;
      }
    return false;
  }
}
