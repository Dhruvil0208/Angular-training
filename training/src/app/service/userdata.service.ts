import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = "http://localhost:5076/Patient/55"
  constructor(private http : HttpClient) { }

  users(){
    return this.http.get(this.url);
  }
 
}
