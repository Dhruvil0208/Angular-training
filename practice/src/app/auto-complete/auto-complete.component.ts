import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements AfterViewInit{

  @ViewChild('searchForm')
  searchForm!: NgForm;
  searchResult:any;
  constructor(private searchService: SearchService){}

  ngAfterViewInit(): void{
    
    const formValue = this.searchForm.valueChanges;
    
    formValue?.pipe(
     
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this.searchService.getSearches(data))
      )
    .subscribe(res =>{
      console.log(res);
      this.searchResult = res;
    })
  }
}
