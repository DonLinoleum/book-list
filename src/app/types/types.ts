export interface IBook
{
    title:string,
    author:IAuthor | undefined,
    pages:number,
    language:ILanguage | undefined,
    genre: IGenre | undefined
}

export interface IAuthor
{
    name: string
}

export interface ILanguage
{
    title: string
}

export interface IGenre
{
    title: string
}