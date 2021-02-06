import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { pipe } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        console.log('Auth Interceptor running');

        if (!user) {
          console.log('Auth interceptor no user token added');
          return next.handle(req);
        }

        console.log('Auth Interceptor user', user);

        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });

        console.log('Auth interceptor adding user token', modifiedReq);
        return next.handle(modifiedReq);
      })
    );
  }
}
