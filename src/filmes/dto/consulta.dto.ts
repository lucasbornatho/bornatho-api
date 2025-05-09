export class ListaFilmesDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly DURACAO: Number,
        readonly SINOPSE: string,
        readonly ANO: string,
        readonly GENERO: string
    ){}
}