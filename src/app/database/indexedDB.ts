import Dexie, {Table} from "dexie";
import { IBook } from "../types/types";

import { booksDB } from "./db";


export class AppDB extends Dexie
{
    books!: Table<IBook,number>
    constructor()
    {
        super('ngdexieliveQuery')
        this.version(3).stores({
            books:'++id,pages'
        })
        this.on('populate',()=>this.populate())
    }

    async populate()
    {
        await indexedDB.books.bulkAdd(booksDB)
    }

}
export const indexedDB = new AppDB()
