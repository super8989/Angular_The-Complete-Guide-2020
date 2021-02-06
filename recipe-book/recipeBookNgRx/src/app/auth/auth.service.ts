import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { API } from 'src/environments/api.service';
import { User } from './user.model';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  apiKey = this.api.apikey;
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private api: API,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  // Replaced by NgRx
  // signup(email: string, password: string) {
  //   console.log(this.apiKey);

  //   // <> === Request Response data
  //   return this.http
  //     .post<AuthResponseData>(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
  //       {
  //         email: email,
  //         password: password,
  //         returnSecureToken: true,
  //       }
  //     )
  //     .pipe(
  //       // catchError(errorRes =>{return throwError(errorRes)})
  //       catchError(this.handleError),

  //       // tap performs some action without changing the response from the observable
  //       tap((resData) => {
  //         this.handleAuthentication(
  //           resData.email,
  //           resData.localId,
  //           resData.idToken,
  //           +resData.expiresIn
  //         );
  //       })
  //     );
  // }

  // login(email: string, password: string) {
  //   console.log('logging in');

  //   return this.http
  //     .post<AuthResponseData>(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
  //       {
  //         email: email,
  //         password: password,
  //         returnSecureToken: true,
  //       }
  //     )
  //     .pipe(
  //       catchError(this.handleError),
  //       tap((resData) => {
  //         console.log('handling login authentication', resData);
  //         return this.handleAuthentication(
  //           resData.email,
  //           resData.localId,
  //           resData.idToken,
  //           +resData.expiresIn
  //         );
  //       })
  //     );
  // }

  // autoLogin() {
  //   const userData: {
  //     email: string;
  //     id: string;
  //     _token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));

  //   console.log('autoLogin userData:', userData);

  //   if (!userData) {
  //     return;
  //   }

  //   const loadedUser = new User(
  //     userData.email,
  //     userData.id,
  //     userData._token,
  //     new Date(userData._tokenExpirationDate)
  //   );

  //   if (loadedUser.token) {
  //     console.log('loadedUser', loadedUser);

  //     // this.user.next(loadedUser);
  //     this.store.dispatch(
  //       new AuthActions.AuthenticateSuccess({
  //         email: loadedUser.email,
  //         userId: loadedUser.id,
  //         token: loadedUser.token,
  //         expirationDate: new Date(userData._tokenExpirationDate),
  //       })
  //     );

  //     const expirationDuration =
  //       new Date(userData._tokenExpirationDate).getTime() -
  //       new Date().getTime();

  //     console.log(expirationDuration);

  //     this.autoLogout(expirationDuration);
  //   }
  // }

  // logout() {
  //   console.log('logged out', this.user);
  //   // this.user.next(null);
  //   this.store.dispatch(new AuthActions.Logout());

  //   // this.router.navigate(['/auth']);
  //   localStorage.removeItem('userData');

  //   if (this.tokenExpirationTimer) {
  //     clearTimeout(this.tokenExpirationTimer);
  //   }

  //   this.tokenExpirationTimer = null;
  // }

  setLogoutTimer(expirationDuration: number) {
    console.log('auto logout in:', expirationDuration + 'ms');

    this.tokenExpirationTimer = setTimeout(() => {
      // this.logout();
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  // private handleAuthentication(
  //   email: string,
  //   userId: string,
  //   token: string,
  //   expiresIn: number
  // ) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, userId, token, expirationDate);

  //   console.log('user authenticated', user);

  //   // this.user.next(user);
  //   this.store.dispatch(
  //     new AuthActions.AuthenticateSuccess({
  //       // email: email,
  //       // userId: userId,
  //       // token: token,
  //       // expirationDate: expirationDate,
  //       email,
  //       userId,
  //       token,
  //       expirationDate,
  //     })
  //   );

  //   // run autoLogout
  //   this.autoLogout(expiresIn * 1000);

  //   localStorage.setItem('userData', JSON.stringify(user));
  //   console.log('local storage set');
  // }

  // private handleError(errorRes: HttpErrorResponse) {
  //   console.log(errorRes);

  //   let errorMessage = 'An unknown error occurred!';

  //   if (!errorRes.error || !errorRes.error.error) throwError(errorMessage);

  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email exists already';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'This email is not registered';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'Invalid password';
  //       break;
  //   }

  //   return throwError(errorMessage);
  // }
}
