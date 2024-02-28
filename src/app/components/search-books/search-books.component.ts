import { Component,Output,Input,EventEmitter } from '@angular/core';
import { IBook } from 'src/app/types/types';

@Component({
  selector: 'search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent 
{
  @Input() searchedAndFilteredBooks:IBook[] = []
  @Input() books:IBook[] = []
  @Output() searchedAndFilteredBooksChange = new EventEmitter<IBook[]>()

  searchValueNameOrDescription:string = ""
  constructor(){}

  searchByNameOrDescription()
  {
    this.searchedAndFilteredBooks = this.books.filter(el=>
    {
      return this.searchValueNameOrDescription.length > 0 ? 
      (el.title.toLocaleLowerCase().includes(this.searchValueNameOrDescription.toLocaleLowerCase()) 
        ||
      el.description.toLocaleLowerCase().includes(this.searchValueNameOrDescription.toLocaleLowerCase()))
      : true
    })
    this.searchedAndFilteredBooksChange.emit(this.searchedAndFilteredBooks)
  }
}
