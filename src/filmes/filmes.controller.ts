import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { criaFilmesDTO } from "./dto/filmes.dto";
import { FilmesArmazenados } from "./filmes.dm";
import { FilmesEntity } from "./filmes.entity";
import { v4 as uuid } from "uuid";
import { ListaFilmesDTO } from "./dto/consulta.dto";
import { alteraFilmeDTO } from "./dto/alteraFilme.dto";

@Controller('/filmes')
export class FilmesController{
constructor(private clsFilmesArmazenados: FilmesArmazenados){

}
    @Post()
    async criaFilme(@Body() dadosFilme: criaFilmesDTO){

        var novoFilme = new FilmesEntity(uuid(), dadosFilme.nome, dadosFilme.duracao, dadosFilme.sinopse, dadosFilme.ano, dadosFilme.genero);
        this.clsFilmesArmazenados.AdicionarFilme(novoFilme);

        var filme = {
            dadosFilme : dadosFilme,
            status: "Filme Criado"
        }
        return filme;
    }

    @Get()
    async listaFilmes(){
        
        const filmesListados = this.clsFilmesArmazenados.Filmes;
        const listaRetorno = filmesListados.map(
            filme => new ListaFilmesDTO(
                filme.id,
                filme.nome,
                filme.duracao,
                filme.sinopse,
                filme.ano,
                filme.genero
            )
        );
        
        return listaRetorno;
    }

    @Get('/:id')
    async filmePorId(@Param('id') id: string) {
      const filmesListados = this.clsFilmesArmazenados.Filmes;
      const filmesEncontrados = filmesListados.filter((filme) => filme.id === id);
    
      if (filmesEncontrados.length === 0) {
        return { message: 'Filme não encontrado' };
      }
    
      const filmeEncontrado = filmesEncontrados[0];
      return new ListaFilmesDTO(
        filmeEncontrado.id,
        filmeEncontrado.nome,
        filmeEncontrado.duracao,
        filmeEncontrado.sinopse,
        filmeEncontrado.ano,
        filmeEncontrado.genero
      );
    }

    @Get('/compartilhar/:id')
    async compartilhaFilme(@Param('id') id: string) {
        const filmesListados = this.clsFilmesArmazenados.Filmes;
    
        const filmeEncontrado = filmesListados.find((filme) => filme.id === id);
    
        if (!filmeEncontrado) {
            return 'Filme não encontrado!';
        }
    
        return `Estou assistindo o filme ${filmeEncontrado.nome}, que conta a seguinte história: ${filmeEncontrado.sinopse}. Foi lançado em ${filmeEncontrado.ano} e tem duração de ${filmeEncontrado.duracao} minutos.`;
    }

    @Put ('/:id')
    async atualizaFilme(@Param ('id') id:string, @Body() novosDados: alteraFilmeDTO){
        const filmeAtualizado = await this.clsFilmesArmazenados.atualizaFilmes(id, novosDados)

        return{
            filme: filmeAtualizado,
            message: 'Filme atualizado'
        }
    }

    @Delete('/:id')
    async removeFilme(@Param('id') id: string){
        const filmeRemovido = await this.clsFilmesArmazenados.removeFilme(id)

        return{
            filme: filmeRemovido,
            message: 'Filme removido'
        }
    }
}