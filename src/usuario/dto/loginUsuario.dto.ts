import { IsEmail, MinLength } from "class-validator";
 
export class LoginUsuarioDTO{
 
    @IsEmail(undefined, {message: 'email invalido'})
    email: string;
 
    @MinLength( 6, {message: 'Senha deve ter no minimo 6 digitos'})
    senha: string;
 
}