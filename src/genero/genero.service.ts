import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import { GENERO } from "./genero.entity";
import { CriaGeneroDTO } from "./dto/criaGenero.dto";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";

@Injectable()
export class GeneroService {
    constructor(
        @Inject('GENERO_REPOSITORY')
        private generoRepository: Repository<GENERO>,
    ) {}

    async listar(): Promise<GENERO[]> {
    }

    async inserir(dados: CriaGeneroDTO): Promise<RetornoCadastroDTO> {
        const genero = new GENERO();
        genero.ID = uuid();
        genero.NOME = dados.NOME;
        genero.DESCRICAO = dados.DESCRICAO;

        return this.generoRepository.save(genero)
            .then(() => {
                return {
                    id: genero.ID,
                    message: 'Genero cadastrado!'
                };
            })
            .catch((error) => {
                return {
                    id: '',
                    message: 'Houve um erro ao cadastrar. ' + error.message
                };
            });
    }
    
    async localizarID(ID: string): Promise<GENERO> {
        const genero = await this.generoRepository.findOne({
            where: { ID },
        });

        if (!genero) {
            throw new Error(`Gênero com ID ${ID} não encontrado`);
        }
    
        return genero;
    }
    

    async remover(id: string): Promise<RetornoObjDTO> {
        const genero = await this.localizarID(id);

        return this.generoRepository.remove(genero)
        .then((result) =>{
            return <RetornoObjDTO>{
                return: genero,
                message: 'Genero excluido!'
            };
        })
        .catch((error) => {
            return <RetornoObjDTO>{
                return: genero,
                message: 'Houve um erro ao excluir.' + error.message
            }
        })
    }
}
