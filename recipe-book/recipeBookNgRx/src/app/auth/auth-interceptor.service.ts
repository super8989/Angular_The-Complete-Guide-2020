import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { pipe } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select('auth').pipe(
      take(1),
      map((authState) => {
        console.log('authState', authState);
        return authState.user;
      }),
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
