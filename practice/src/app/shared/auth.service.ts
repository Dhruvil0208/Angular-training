import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }

  Loginurl = "http://restapi.adequateshop.com/api/authaccount/login"
  SignUpurl = "http://restapi.adequateshop.com/api/authaccount/registration"
  postLoginData(data:any){
    return this.http.post(this.Loginurl, data);
  }

  postSignUpData(data:any){
    return this.http.post(this.SignUpurl,data);
  }
}
