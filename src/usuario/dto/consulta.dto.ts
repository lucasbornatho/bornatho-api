export class ListaUsuariosDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly email: string,
        // readonly assinatura: string,
        // readonly senha: string,
        // readonly foto: string
    ){}
}