import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString} from 'class-validator'

export class criaFilmeDTO{
    @IsString()
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @ApiProperty({
        example: 'Filme',
        description: 'Este campo especifica o nome do filme, não pode ser vazio'
    })
    nome: string;

    @IsInt()
    @ApiProperty({
        example: '120',
        description: 'Este campo especifica a duracao do filme, deve ser um numero'
    })
    duracao: Number;

    @IsString()
    @IsNotEmpty({message: 'sinopse não pode ser vazio'})
    @ApiProperty({
        example: 'Um filme que fala sobre x',
        description: 'Este campo especifica a sinopse do filme, não pode ser vazio'
    })
    sinopse: string;

    @IsString()
    @ApiProperty({
        example: '2025',
        description: 'Este campo especifica o ano em que o filme foi lançado'
    })
    ano: string;

    @IsString()
    @ApiProperty({
        example: 'Terror',
        description: 'Este campo especifica o genero do filme'
    })
    genero: string;

}