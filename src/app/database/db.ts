import { IAuthor, IBook, IGenre, ILanguage } from "../types/types";

export const authorsDB:IAuthor[] = 
[
    {name:"Лев Николаевич Толстой"},
    {name:"Антон Павлович Чехов"},
    {name:"Джек Лондон"},
    {name: "Лю Цысинь"}
]

export const languagesDB:ILanguage[] = 
[
    {title:"Русский"},{title:"Английский"},{title:"Китайский"}
]

export const genresDB:IGenre[] = 
[
    {title: "Новелла"},
    {title: "Реализм"},
    {title: "Художественная проза"},
    {title: "Приключенческий роман"},
    {title: "Фантастика"},
    {title: "Роман"},
    {title: "Пьеса"},
]

export const booksDB:IBook[] = 
[
    {
        title: "Белый Клык",
        author: authorsDB.find(el=>el.name === "Джек Лондон"),
        pages: 224,
        language:languagesDB.find(el=>el.title === "Английский"),
        genre: genresDB.find(el=>el.title === "Приключенческий роман")
    },
    {
        title: "Война и мир",
        author: authorsDB.find(el=>el.name === "Лев Николаевич Толстой"),
        pages: 960,
        language:languagesDB.find(el=>el.title === "Русский"),
        genre: genresDB.find(el=>el.title === "Роман")    
    },
    {
        title: "Вишневый сад",
        author: authorsDB.find(el=>el.name === "Антон Павлович Чехов"),
        pages: 224,
        language:languagesDB.find(el=>el.title === "Русский"),
        genre: genresDB.find(el=>el.title === "Пьеса") 
    },
    {
        title: "Задача трех тел",
        author: authorsDB.find(el=>el.name === "Лю Цысинь"),
        pages: 464,
        language:languagesDB.find(el=>el.title === "Китайский"),
        genre: genresDB.find(el=>el.title === "Фантастика") 
    },
    {
        title: "Темный лес",
        author: authorsDB.find(el=>el.name === "Лю Цысинь"),
        pages: 640,
        language:languagesDB.find(el=>el.title === "Китайский"),
        genre: genresDB.find(el=>el.title === "Фантастика") 
    }
]


