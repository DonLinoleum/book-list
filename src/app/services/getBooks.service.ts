import { Injectable } from "@angular/core";
import { IBook } from "../types/types";
import { booksDB } from "../database/db";

@Injectable()
export class GetBooksService
{
    constructor(){}
    getAllBooks() : IBook[]
    {
        return booksDB
    }
}