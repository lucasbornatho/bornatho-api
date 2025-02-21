import { Body, Controller, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioController{
    @Post()
    async criaUsuario(@Body() dadosUsuarios){

        var usuario = {
            dadosUsuarios : dadosUsuarios,
            status: "Usuario Criado"
        }
        return usuario;
    }
}