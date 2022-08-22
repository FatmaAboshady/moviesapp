import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 private isLogin = false;

  constructor() {
    if(localStorage.getItem('isLogin')=='true'){
      this.isLogin=true;
    }
  }

  IsLogIn(): boolean {
    return this.isLogin;

  }
  LogMeIn(){
    this.isLogin=true;
    localStorage.setItem('isLogin','true');
  }

  LogMeOut(){
    this.isLogin=false;
    localStorage.setItem('isLogin','false');
  }


}
