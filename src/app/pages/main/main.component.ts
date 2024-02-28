import { Component,OnInit } from '@angular/core';
import { IAuthor, IBook, IGenre, ILanguage } from 'src/app/types/types';
import { GetBooksService } from 'src/app/services/getBooks.service';
import { GetAuthorsService } from 'src/app/services/getAuthors.service';
import { GetLanguageService } from 'src/app/services/getLanguages.service';
import { MatDialog } from '@angular/material/dialog';
import { BookCreateFromComponent } from 'src/app/components/modals/book-create-form/book-create-form.component';
import { GetMinAndMaxPagesService } from 'src/app/services/getMinAndMaxPages.service';
import { GetGenreService } from 'src/app/services/getGenres.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  searchedAndFilteredBooks:IBook[] = [];
  books:IBook[] = [];
  authorsList:IAuthor[] = []
  genresList:IGenre[] = []
  languageList:ILanguage[] = []

  filterValueByLanguagesName:string[] = []
  filterValueByPages = ""
  filterValueByGenresName:string[] = []

  

  minPagesFromDB:number = 0
  maxPagesFromDB:number = 0

  constructor(private getBookService:GetBooksService,
    private getAuthorService:GetAuthorsService,
    private getLanguageService:GetLanguageService,
    private getMinAndMaxPages:GetMinAndMaxPagesService,
    private getGenreService:GetGenreService,
    public modal:MatDialog){}

  ngOnInit()
  {
    this.authorsList = this.getAuthorService.getAllAuthors()
    this.languageList = this.getLanguageService.getAllLanguages()
    this.minPagesFromDB = this.getMinAndMaxPages.getMinAndMaxPages().min
    this.maxPagesFromDB = this.getMinAndMaxPages.getMinAndMaxPages().max
    this.genresList = this.getGenreService.getAllGenres()
    this.books = this.getBookService.getAllBooks()
    this.searchedAndFilteredBooks = this.books 
  }

  openModal()
  {
    const modal =  this.modal.open(BookCreateFromComponent,{panelClass:"modal-wrapper"})
    modal.afterClosed().subscribe(result => {
      this.ngOnInit()
    })
  }
}
