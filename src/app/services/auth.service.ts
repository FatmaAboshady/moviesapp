import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _httpclient:HttpClient) { }
  currentUser = null;

  saveCurrentUser()
  {
    let token:any = localStorage.getItem('userToken')
    this.currentUser=jwtDecode(token)
  }

  register(formData:any):Observable<any>{
    // post(url, data send to url)
    //  return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formData)
    return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formData)

  }

  login(formData:any):Observable<any>{
    // post(url, data send to url)
    //  return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formData)
    return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formData)

  }
}
