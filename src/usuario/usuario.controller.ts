import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuariosArmazenados } from "./usuario.dm";
import { UsuarioEntity } from "./usuario.entity";

@Controller('/usuarios')
export class UsuarioController{
constructor(private clsUsuariosArmazenados: UsuariosArmazenados){

}
    @Post()
    async criaUsuario(@Body() dadosUsuario){

        var validacoes = this.clsUsuariosArmazenados.validaUsuario(dadosUsuario);

        if (validacoes.length > 0){
            return {
                status: 'Erro',
                validacoes: validacoes
            }
        }

        var novoUsuario = new UsuarioEntity(dadosUsuario.id, dadosUsuario.nome, dadosUsuario.idade, 
            dadosUsuario.cidade, dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha);
        this.clsUsuariosArmazenados.AdicionarUsuario(novoUsuario);

        var usuario = {
            dadosUsuario : dadosUsuario,
            status: "Usuario Criado"
        }
        return usuario;
    }

    @Get()
    async listaUsuarios(){
        return this.clsUsuariosArmazenados.Usuarios;
    }
}