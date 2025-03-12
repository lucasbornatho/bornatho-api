import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'
import { EmailUnico } from '../validacao/email-unico.validator';

export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @IsOptional()
    nome: string;

    @IsInt()
    @IsOptional()
    idade: Number;

    @IsString()
    @IsOptional()
    cidade: string;

    @IsEmail(undefined, {message:'e-mail invalido'})
    @EmailUnico({message:'E-email ja cadastrado. Tente novamente'})
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    telefone: string;

    @MinLength(6,{message: 'Senha precisa de pelo menos 6 digitos'})
    @IsOptional()
    senha: string;
}