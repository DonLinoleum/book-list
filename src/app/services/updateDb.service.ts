import { Injectable } from "@angular/core";
import { IAuthor, IBook, IFormBookData } from "../types/types";
import { authorsDB,booksDB,languagesDB } from "../database/db";
import { GetAuthorsService } from "./getAuthors.service";
import { GetLanguageService } from "./getLanguages.service";


@Injectable()
export class UpdateDB
{
    constructor(private getAuthorsService:GetAuthorsService, private getLanguageService:GetLanguageService){}

    updateAuthorByIndex(index:number,newValue:string)
    {
        authorsDB[index] = {name:newValue}
    }

    createNewAuthor(name:string)
    {
        authorsDB.push({name})
    }

    createNewBook(dataForm:IFormBookData)
    {
         const author = authorsDB[this.getAuthorsService.getIndexByName(dataForm.author)]
         const language = languagesDB[this.getLanguageService.getIndexByName(dataForm.language)]
         const genre = dataForm.genre
         const title = dataForm.title
         const description = dataForm.description
         const pages = dataForm.pages
         const data:IBook = {title,description,author,language,pages,genre}
         booksDB.push(data)
    }
     
}