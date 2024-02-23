import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IBook } from 'src/app/types/types';

@Component({
  selector: 'app-book-detail-modal',
  templateUrl: './book-detail-modal.component.html',
  styleUrls: ['./book-detail-modal.component.css']
})
export class BookDetailModalComponent 
{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IBook
  ){}
}
