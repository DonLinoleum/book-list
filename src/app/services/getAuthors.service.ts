import { Injectable } from "@angular/core";
import { IAuthor } from "../types/types";
import { authorsDB } from "../database/db";

@Injectable()
export class GetAuthorsService
{
    constructor(){}
    getAllAuthors() : IAuthor[]
    {
        return authorsDB
    }

    getIndexByName(name:string)
    {
        return authorsDB.findIndex(el=>el.name === name)
    }
}