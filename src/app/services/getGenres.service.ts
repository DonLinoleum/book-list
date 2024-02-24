import { Injectable } from "@angular/core";
import { IGenre } from "../types/types";
import { genreDB } from "../database/db";


@Injectable()
export class GetGenreService
{
    constructor(){}
    getAllGenres():IGenre[]
    {   
        return genreDB;
    }

    getIndexByName(title:string)
    {
        return genreDB.findIndex(el=>el.title === title)
    }
    

    returnExistGenre(title:string)
    {
        const index = this.getIndexByName(title)
        if (index !== -1)
            return genreDB[index]
        else
            return undefined  
    }

}