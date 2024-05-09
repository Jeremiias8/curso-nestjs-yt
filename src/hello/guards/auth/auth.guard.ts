import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);

    // Guard - para poder aplicar un condicional previa a la petición
    // if (request.url === '/greet') return false;

    if (!request.headers['authorization']) return false;

    return true;
  }
}
