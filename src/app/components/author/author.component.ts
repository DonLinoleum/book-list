import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorUpdateComponent } from '../modals/author-update/author-update.component';


@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent 
{
  @Input() name:string = "";
  
  constructor(public modal:MatDialog){}
  openModal()
  {
    const modal = this.modal.open(AuthorUpdateComponent,{data:{name:this.name},panelClass:"modal-wrapper"})
  }
  
}
