import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'
import { EmailUnico } from '../validacao/email-unico.validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { SenhaForte } from '../validacao/senha-forte.validator';

export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Joao Silva',
        description: 'Esse campo identifica o nome do usuário, não pode estar vazio'
    })
    nome: string;

    @IsInt()
    @IsOptional()
    @ApiPropertyOptional({
        example: '30',
        description: 'Esse campo identifica a idade do usuario, deve ser informado um número'
    })
    idade: Number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Bauru',
        description: 'Deve ser enviado o nome da cidade'
    })
    cidade: string;

    @IsEmail(undefined, {message:'e-mail invalido'})
    @EmailUnico({message:'E-email ja cadastrado. Tente novamente'})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'joaosilva@email.com',
        description: 'Esse campo ira ser o login do usuario, deve ser informado um email unico'
    })
    email: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: '14999997777',
        description: 'Esse campo é o contato do usuario, deve ser informado um telefone'
    })
    telefone: string;

    @MinLength(6,{message: 'Senha precisa de pelo menos 6 digitos'})
    @SenhaForte({message: 'Senha muito fraca. Tente novamente'})
    @IsOptional()
    @ApiPropertyOptional({
        example: '@Senha1234',
        description: 'Senha que deve ter numeros, letras maisculas e minusculas, caracteres especiais e ao menos 6 digitos'
    })
    senha: string;
}