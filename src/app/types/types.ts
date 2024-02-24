export interface IBook
{
    title:string,
    description: string,
    author:IAuthor | undefined,
    pages:number,
    language:ILanguage | undefined,
    genre: IGenre | undefined
}

export interface IFormBookData{
    title:string 
    description:string
    author: string
    pages:number 
    language:string 
    genre: string 
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