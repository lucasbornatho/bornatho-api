import { IsInt, IsNotEmpty, IsString} from 'class-validator'

export class criaFilmesDTO{
    @IsString()
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    nome: string;

    @IsInt()
    duracao: Number;

    @IsString()
    @IsNotEmpty({message: 'sinopse não pode ser vazio'})
    sinopse: string;

    @IsString()
    ano: string;

    @IsString()
    genero: string;

}