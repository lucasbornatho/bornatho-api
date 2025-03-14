export class ListaFilmesDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly duracao: Number,
        readonly sinopse: string,
        readonly ano: string,
        readonly genero: string
    ){}
}