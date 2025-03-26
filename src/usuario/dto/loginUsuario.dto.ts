import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";
 
export class LoginUsuarioDTO{
 
    @IsEmail(undefined, {message: 'email invalido'})
    @ApiProperty({
        example: 'joaosilva@email.com',
        description: 'Este é o login do usuario'
    })
    email: string;
 
    @MinLength( 6, {message: 'Senha deve ter no minimo 6 digitos'})
    @ApiProperty({
        example: '@Senha1234',
        description: 'Senha unica do usuario que deve ter numeros, letras maisculas e minusculas, caracteres especiais e ao menos 6 digitos'
    })
    senha: string;
 
}