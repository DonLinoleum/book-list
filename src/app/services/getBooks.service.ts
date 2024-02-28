import { Injectable } from "@angular/core";
import { IBook } from "../types/types";
import { booksDB } from "../database/db";
import { liveQuery } from 'dexie';
import { indexedDB } from "../database/indexedDB";
import {Observable} from 'rxjs'

@Injectable()
export class GetBooksService
{
    constructor(){}
    getAllBooks() 
    {
       let books:IBook[] = []
       liveQuery<IBook[]>(()=>indexedDB.books.toArray()).subscribe(dataFromDb=>{
        dataFromDb.forEach((el:IBook)=>books.push(el))
       })
       return books
    }
}