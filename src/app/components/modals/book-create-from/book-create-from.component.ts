import { Component,OnInit } from '@angular/core';
import { GetAuthorsService } from 'src/app/services/getAuthors.service';
import { GetLanguageService } from 'src/app/services/getLanguages.service';
import { IAuthor, IBook, IGenre, ILanguage } from 'src/app/types/types';
import {FormGroup,Validators,FormBuilder } from "@angular/forms";
import { UpdateDB } from 'src/app/services/updateDb.service';
import { IFormBookData } from 'src/app/types/types';

@Component({
  selector: 'app-book-create-from',
  templateUrl: './book-create-from.component.html',
  styleUrls: ['./book-create-from.component.css']
})
export class BookCreateFromComponent implements OnInit 
{
  languages:ILanguage[] = []
  authors:IAuthor[] = []
  genres:IGenre[] = []
  modalForm:FormGroup;

  formData:IFormBookData = {
  title:"",
  description:"",
  author: "" ,
  pages: 0,
  language:"",
  genre: "",
  }
  

  constructor(private formBuilder:FormBuilder,
    private getLanguages:GetLanguageService,
    private getAuthors:GetAuthorsService,
    private updateDB:UpdateDB
    )
    {
      this.modalForm = formBuilder.group({
        "title":["",[Validators.required]],
        "description":["",[Validators.required]],
        "author":["",[Validators.required]],
        "pages":["",[Validators.min(1)]],
        "language":["",[Validators.required]],
        "genre":["",[Validators.required]],
      })
    }

  ngOnInit(): void 
  {
    this.languages = this.getLanguages.getAllGenres()
    this.authors = this.getAuthors.getAllAuthors()
  }

  submit()
  {
    this.updateDB.createNewBook(this.formData)
  }
}


