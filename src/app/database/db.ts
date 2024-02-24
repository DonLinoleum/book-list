import { IAuthor, IBook, IGenre, ILanguage } from "../types/types";

export let authorsDB:IAuthor[] = 
[
    {name:"Лев Николаевич Толстой"},
    {name:"Антон Павлович Чехов"},
    {name:"Джек Лондон"},
    {name: "Лю Цысинь"}
]

export let languagesDB:ILanguage[] = 
[
    {title:"Русский"},{title:"Английский"},{title:"Китайский"}
]

export let genreDB:IGenre[] = 
[
    {title:"Приключенческий роман"},{title:"Роман"},{title:"Пьеса"},{title:"Фантастика"}
]

export let booksDB:IBook[] = 
[
    {
        title: "Белый Клык",
        description: "Подробное описание...",
        author: authorsDB.find(el=>el.name === "Джек Лондон"),
        pages: 224,
        language:languagesDB.find(el=>el.title === "Английский"),
        genre:  genreDB.find(el => el.title === "Приключенческий роман")
    },
    {
        title: "Война и мир",
        description: "Подробное описание...",
        author: authorsDB.find(el=>el.name === "Лев Николаевич Толстой"),
        pages: 960,
        language:languagesDB.find(el=>el.title === "Русский"),
        genre: genreDB.find(el => el.title ==="Роман")
    },
    {
        title: "Вишневый сад",
        description: "Подробное описание...",
        author: authorsDB.find(el=>el.name === "Антон Павлович Чехов"),
        pages: 224,
        language:languagesDB.find(el=>el.title === "Русский"),
        genre: genreDB.find(el => el.title ==="Пьеса")
    },
    {
        title: "Задача трех тел",
        description: "Подробное описание...",
        author: authorsDB.find(el=>el.name === "Лю Цысинь"),
        pages: 464,
        language:languagesDB.find(el=>el.title === "Китайский"),
        genre: genreDB.find(el => el.title ==="Фантастика")
    },
    {
        title: "Темный лес",
        description: "Очень подробное описание про Темный лес",
        author: authorsDB.find(el=>el.name === "Лю Цысинь"),
        pages: 640,
        language:languagesDB.find(el=>el.title === "Китайский"),
        genre: genreDB.find(el => el.title ==="Фантастика")
    }
]


