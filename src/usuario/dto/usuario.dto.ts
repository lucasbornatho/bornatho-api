import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength} from 'class-validator'
import { EmailUnico } from '../validacao/email-unico.validator';

export class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    nome: string;

    @IsInt()
    idade: Number;

    @IsString()
    cidade: string;

    @IsEmail(undefined, {message:'e-mail invalido'})
    @EmailUnico({message:'E-email ja cadastrado. Tente novamente'})
    email: string;

    @IsString()
    telefone: string;

    @MinLength(6,{message: 'Senha precisa de pelo menos 6 digitos'})
    senha: string;
}