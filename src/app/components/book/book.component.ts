import { Component,Input } from '@angular/core';
import { IAuthor, IGenre, ILanguage } from 'src/app/types/types';
import {MatDialog} from '@angular/material/dialog';
import { BookDetailModalComponent } from '../modals/book-detail-modal/book-detail-modal.component';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(public modal:MatDialog){}

  @Input() title:string = ""
  @Input() description: string = "" 
  @Input() author:IAuthor | undefined = undefined
  @Input() pages: number = 0
  @Input() language: ILanguage | undefined = undefined
  @Input() genre: IGenre | undefined = undefined

  openModal(){const modal = this.modal.open(BookDetailModalComponent,{
    data:{
      title:this.title,
      description:this.description,
      author:this.author,
      pages:this.pages,
      language:this.language,
      genre:this.genre
    },panelClass:'modal-wrapper'
  })}
}
