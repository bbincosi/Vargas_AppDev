import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authenticated = false;
  constructor() { }
  

  
  canActivate() {
    return this.authenticated;
  }

  validateLoad() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.authenticated) {
          resolve('');
        } else {
          reject();
        }
      }, 5000);
    });
  }
}
