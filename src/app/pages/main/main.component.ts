import { Component,OnInit } from '@angular/core';
import { IBook } from 'src/app/types/types';
import { GetBooksService } from 'src/app/services/getBooks.service';
import { MatDialog } from '@angular/material/dialog';
import { BookCreateFromComponent } from 'src/app/components/modals/book-create-from/book-create-from.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  searchedBooks:IBook[] = [];
  books:IBook[] = [];
  searchValueNameOrDescription:string = ""

  constructor(private getBookService:GetBooksService,public modal:MatDialog){}
  ngOnInit()
  {
    this.books = this.getBookService.getAllBooks();
    this.searchedBooks = this.books
  }

  openModal()
  {
   const modal =  this.modal.open(BookCreateFromComponent,{panelClass:"modal-wrapper"})
  }

  searchByNameOrDescription()
  {
    this.searchedBooks = this.books.filter(el=>
    {
      return el.title.toLocaleLowerCase().includes(this.searchValueNameOrDescription.toLocaleLowerCase()) 
        ||
      el.description.toLocaleLowerCase().includes(this.searchValueNameOrDescription.toLocaleLowerCase())
    })
  }
}
