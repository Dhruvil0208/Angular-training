import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  url$ = 'https://jsonplaceholder.typicode.com/users';

  getSearches(searchQuery:string){
    return this.http.get(this.url$+'?q='+searchQuery);
  }
}
