import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuariosArmazenados{
    #usuarios : UsuarioEntity[] = [];

    AdicionarUsuario(usuario: UsuarioEntity){
        this.#usuarios.push(usuario);
    }

    async removeUsuario(id:string){
        const usuario = this.buscarPorId(id);

        this.#usuarios = this.#usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )

        return usuario;
    }

    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>){
        const usuario = this.buscarPorId(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (valor === undefined){
                    return
                }
                if(chave === "id"){
                    return
                }else if(chave === 'email'){
                    usuario.trocarSenha(valor);
                    return
                }
              usuario[chave] =   valor;
            }
        )

        return usuario;
    }

    get Usuarios(){
        return this.#usuarios;
    }

    private buscarPorId(id: string){
        const possivelUsuario = this.#usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        )

        if(!possivelUsuario){
            throw new Error('Usuario não encontrado')
        }
        return possivelUsuario;
    }

    async validaEmail(email: string): Promise<boolean>{
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email === email
        );
        return(possivelUsuario !== undefined);
    }

    private buscarPorEmail(email: string){
        const possivelUsuario = this.#usuarios.find(
            usuarioSalvo => usuarioSalvo.email === email
        )
 
        if(!possivelUsuario){
            throw new Error("Usuário não Encontrado")
        }
 
        return possivelUsuario;
 
    }
 
    validarLogin(email: string, senha:string){
        const usuario = this.buscarPorEmail(email);
        return{
            login: usuario.login(senha),
            usuario: usuario,
        }
}

}