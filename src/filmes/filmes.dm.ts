import { Injectable } from "@nestjs/common";
import { FilmesEntity } from "./filmes.entity";

@Injectable()
export class FilmesArmazenados{
    #filmes : FilmesEntity[] = [];

    AdicionarFilme(filme: FilmesEntity){
        this.#filmes.push(filme);
    }

    async removeFilme(id:string){
        const filme = this.buscarPorId(id);

        this.#filmes = this.#filmes.filter(
            filmesSalvo => filmesSalvo.id !== id
        )

        return filme;
    }

    atualizaFilmes(id: string, dadosAtualizacao: Partial<FilmesEntity>){
        const filme = this.buscarPorId(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (chave === 'id'){
                    return
                }
                if (valor === undefined){
                    return
                }

                filme[chave] = valor;
            }
        )

        return filme;
    }

    get Filmes(){
        return this.#filmes;
    }

    private buscarPorId(id: string){
        const possivelFilme = this.#filmes.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if(!possivelFilme){
            throw new Error('Filme não encontrado')
        }
        return possivelFilme;
    }

}