import { Editora } from "./editora";
import { Autor } from "./autor";

export interface Livro {
    titulo:String;
    subtitulo:String;
    capa:String;
    editora:Editora;
    autor:Autor;
    isbn:String;
    publicacao:String;
    paginas:number;
}