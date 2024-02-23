import { Component,Inject,Output,EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IAuthor } from 'src/app/types/types';
import {FormGroup,Validators,FormBuilder } from "@angular/forms";
import { UpdateDB } from 'src/app/services/updateDb.service';
import { GetAuthorsService } from 'src/app/services/getAuthors.service';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent 
{
  modalForm:FormGroup;
  authorName:string = this.data.name

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IAuthor,
    private formBuilder:FormBuilder,
    private updateDB:UpdateDB,
    private getAuthorsService:GetAuthorsService
  ){
    this.modalForm = formBuilder.group({
      "authorName":["",[Validators.required]]
    })
  }

  submit()
  {
    const index = this.getAuthorsService.getIndexByName(this.data.name)
    this.updateDB.updateAuthorByIndex(index,this.modalForm.value.authorName)
    this.data.name = this.modalForm.value.authorName
  }
  
}
