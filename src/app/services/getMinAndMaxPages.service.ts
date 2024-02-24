import { Injectable } from "@angular/core";
import { booksDB } from "../database/db";

@Injectable()
export class GetMinAndMaxPagesService
{
    constructor(){}
    getMinAndMaxPages()
    {
        let pages:number[] = booksDB.map(el=>el.pages)
        return{
            min:Math.min(...pages),
            max:Math.max(...pages)
        }
    }

    
  
}