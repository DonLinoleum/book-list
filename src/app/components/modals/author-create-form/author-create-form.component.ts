import { Component,Inject } from '@angular/core';
import {FormGroup,Validators,FormBuilder } from "@angular/forms";
import { UpdateDB } from 'src/app/services/updateDb.service';
import { GetAuthorsService } from 'src/app/services/getAuthors.service';

@Component({
  selector: 'app-author-create-form',
  templateUrl: './author-create-form.component.html',
  styleUrls: ['./author-create-form.component.css']
})
export class AuthorCreateFromComponent 
{
modalForm:FormGroup;
authorName:string = "";

constructor(
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
      this.updateDB.createNewAuthor(this.authorName)
  }

}
