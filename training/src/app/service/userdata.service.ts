import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = "http://localhost:5076/Patient/"
  constructor(private http : HttpClient) { }

  users(){
    return this.http.get(this.url);
  }
  saveUsers(data:any){
    return this.http.post(this.url,data);
  }
 
}
