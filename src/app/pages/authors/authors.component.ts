import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/types/types';
import { MatDialog } from '@angular/material/dialog';
import { GetAuthorsService } from 'src/app/services/getAuthors.service';
import { AuthorCreateFromComponent } from 'src/app/components/modals/author-create-from/author-create-from.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit
{
  constructor (private getAuthorsService: GetAuthorsService,public modal:MatDialog){}
  authors: IAuthor[] = [];
  ngOnInit(): void 
  {
    this.authors = this.getAuthorsService.getAllAuthors();
  }

  create()
  {
    const modal = this.modal.open(AuthorCreateFromComponent,{panelClass:"modal-wrapper"})
  }
}
