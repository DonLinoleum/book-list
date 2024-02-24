import { Injectable } from "@angular/core";
import { IAuthor, IBook, IFormBookData, IGenre, ILanguage } from "../types/types";
import { authorsDB,booksDB,genreDB,languagesDB } from "../database/db";
import { GetAuthorsService } from "./getAuthors.service";
import { GetLanguageService } from "./getLanguages.service";
import { GetGenreService } from "./getGenres.service";


@Injectable()
export class UpdateDB
{
    constructor(private getAuthorsService:GetAuthorsService, private getLanguageService:GetLanguageService,private getGenreService:GetGenreService){}

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
        
         let author:IAuthor = authorsDB[this.getAuthorsService.getIndexByName(dataForm.author)]
         let language:ILanguage = languagesDB[this.getLanguageService.getIndexByName(dataForm.language)]

         let genre:IGenre
         if (this.getGenreService.returnExistGenre(dataForm.genre))   
             genre = genreDB[this.getGenreService.getIndexByName(dataForm.genre)] 
         else
             genre = this.createNewGenre(dataForm.genre)
         

         let title:string = dataForm.title
         let description:string = dataForm.description
         let pages:number = dataForm.pages
         let data:IBook = {title,description,author,language,pages,genre}
         booksDB.push(data)
    }

    createNewGenre(title:string)
    {
        return {title:title}
    }
     
}