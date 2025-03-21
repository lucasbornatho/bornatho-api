import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { UsuariosArmazenados } from "./usuario.dm";
import { UsuarioEntity } from "./usuario.entity";
import { criaUsuarioDTO } from "./dto/usuario.dto";
import { v4 as uuid } from "uuid";
import { ListaUsuariosDTO } from "./dto/consulta.dto";
import { alteraUsuarioDTO } from "./dto/alteraUsuario.dto";
import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{
constructor(private clsUsuariosArmazenados: UsuariosArmazenados){

}
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){

        var novoUsuario = new UsuarioEntity(uuid(), dadosUsuario.nome, dadosUsuario.idade, 
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
        
        const usuariosListados = this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuariosDTO(
                usuario.id,
                usuario.nome,
                usuario.email
            )
        );
        
        return listaRetorno;
    }

    @Put ('/:id')
    async atualizaUsuario(@Param ('id') id:string, @Body() novosDados: alteraUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        }
    }

    @Post("/login")
    async login(@Body() dadoslogin: LoginUsuarioDTO){
        var login  = this.clsUsuariosArmazenados.validarLogin(dadoslogin.email, dadoslogin.senha);
 
        return{
            status: login.login,
            usuario: login.login?login.usuario: null,
            message: login?"login Efetuado" : "Usuario ou senha Invalidos"
        }
    }
}