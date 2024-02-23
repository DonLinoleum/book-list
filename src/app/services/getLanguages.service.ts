import { Injectable } from "@angular/core";
import { ILanguage } from "../types/types";
import { languagesDB } from "../database/db";


@Injectable()
export class GetLanguageService
{
    constructor(){}
    getAllGenres():ILanguage[]
    {   
        return languagesDB;
    }

    getIndexByName(title:string)
    {
        return languagesDB.findIndex(el=>el.title === title)
    }
}