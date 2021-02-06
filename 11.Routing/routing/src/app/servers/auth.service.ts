export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });

    return promise;
  }

  login() {
    console.log('logged in');
    this.loggedIn = true;
  }

  logout() {
    console.log('logged out');
    this.loggedIn = false;
  }
}
