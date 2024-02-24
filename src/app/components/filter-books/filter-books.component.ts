import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { GetMinAndMaxPagesService } from 'src/app/services/getMinAndMaxPages.service';
import { IAuthor, IBook, IGenre, ILanguage } from 'src/app/types/types';

@Component({
  selector: 'filter-books',
  templateUrl: './filter-books.component.html',
  styleUrls: ['./filter-books.component.css']
})
export class FilterBooksComponent implements OnInit 
{
  @Input() searchedAndFilteredBooks:IBook[] = []
  @Output() searchedAndFilteredBooksChange = new EventEmitter<IBook[]>()

  @Input() books:IBook[] = []
  @Input() authorsList:IAuthor[] = []
  @Input() languageList:ILanguage[] = []
  @Input() genreList:IGenre[] = []
  @Input() maxPagesFromDB:number = 0
  @Input() minPagesFromDB:number = 0

  filterValueByAuthorsName:string[] = []
  filterValueLanguage:string[] = []
  filterValueByGenre:string = ""
  filterValueMaxPages:number = 0
  filterValueMinPages:number = 0
  constructor() {}
  ngOnInit(): void 
  {
    this.filterValueMaxPages = this.maxPagesFromDB
    this.filterValueMinPages = this.minPagesFromDB
  }

  filterBooks()
  {
      this.searchedAndFilteredBooks = this.books.filter(el=>{
        console.log(this.filterValueByGenre)
          return (this.filterValueByAuthorsName.length > 0 ? this.filterValueByAuthorsName.includes(el.author?.name as string) : []) &&
          (this.filterValueLanguage.length > 0 ? this.filterValueLanguage.includes(el.language?.title as string) : []) &&
          (this.filterValueMinPages > 0 ? el.pages >= this.filterValueMinPages : []) && 
          (this.filterValueMaxPages > 0 ? el.pages <= this.filterValueMaxPages : []) &&
          (this.filterValueByGenre.length > 0 ? this.filterValueByGenre.includes(el.genre?.title as string) : [])
      })
    
        this.searchedAndFilteredBooksChange.emit(this.searchedAndFilteredBooks)
  }
}
