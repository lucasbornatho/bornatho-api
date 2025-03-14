import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class alteraFilmeDTO{
    @IsString()
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @IsOptional()
    nome: string;

    @IsInt()
    @IsOptional()
    duracao: Number;

    @IsString()
    @IsNotEmpty({message: 'sinopse não pode ser vazio'})
    @IsOptional()
    sinopse: string;

    @IsString()
    @IsOptional()
    ano: string;

    @IsString()
    @IsOptional()
    genero: string;
}