import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class alteraFilmeDTO{
    @IsString()
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Filme',
        description: 'Este campo especifica o nome do filme, não pode ser vazio'
    })
    nome: string;

    @IsInt()
    @IsOptional()
    @ApiPropertyOptional({
        example: '120',
        description: 'Este campo especifica a duracao do filme, deve ser um numero'
    })
    duracao: Number;

    @IsString()
    @IsNotEmpty({message: 'sinopse não pode ser vazio'})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Um filme que fala sobre x',
        description: 'Este campo especifica a sinopse do filme, não pode ser vazio'
    })
    sinopse: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: '2025',
        description: 'Este campo especifica o ano em que o filme foi lançado'
    })
    ano: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Terror',
        description: 'Este campo especifica o genero do filme'
    })
    genero: string;
}