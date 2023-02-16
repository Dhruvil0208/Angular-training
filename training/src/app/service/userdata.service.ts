import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:"shruvil",age:45,email:"shruvil@test.com"},
      {name:"shruvil",age:45,email:"shruvil@test.com"},
      {name:"shruvil",age:45,email:"shruvil@test.com"},
      {name:"shruvil",age:45,email:"shruvil@test.com"},
    ]
  }
}
