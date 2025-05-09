import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { criaFilmesDTO } from "./dto/filme.dto";
import { alteraFilmesDTO } from "./dto/alteraFilme.dto";
import { ApiCreatedResponse, ApiResponse, ApiTags, ApiAcceptedResponse } from "@nestjs/swagger";
import { FilmeService } from "./filme.service";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { ListaFilmeDTO } from "./dto/listaFilme.dto";

@ApiTags('filme')
@Controller('/filmes')
export class FilmesController {
    constructor(private readonly filmeService: FilmeService) {}

    @Post()
    @ApiCreatedResponse({ description: 'Retorna que houve sucesso na inclusão.' })
    @ApiResponse({ status: 500, description: 'Retorna que houve erro na inclusão.' })
    @ApiResponse({ status: 400, description: 'Retorna que há algum dado inválido na requisição.' })
    async criaFilme(@Body() dadosFilme: criaFilmesDTO): Promise<RetornoCadastroDTO> {
        return this.filmeService.inserir(dadosFilme);
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na consulta.' })
    async retornaFilme(): Promise<ListaFilmeDTO[]> {
        return await this.filmeService.listar();
    }

    @Get('/:id')
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na consulta.' })
    @ApiResponse({ status: 500, description: 'Retorna que houve erro na consulta.' })
    async retornaFilmeId(@Param('id') id: string) {
        const filmesListados = await this.filmeService.Compartilhar(id);
        return { filme: filmesListados };
    }

    // @Get('/compartilhar/:id')
    // async compartilhaFilme(@Param('id') id: string) {
    //     const filmesListados = this.filmeService.getFilmesArmazenados(); // Supondo que esse método exista

    //     const filmeEncontrado = filmesListados.find((filme) => filme.id === id);

    //     if (!filmeEncontrado) {
    //         return 'Filme não encontrado!';
    //     }

    //     return `Estou assistindo o filme ${filmeEncontrado.nome}, que conta a seguinte história: ${filmeEncontrado.sinopse}. Foi lançado em ${filmeEncontrado.ano} e tem duração de ${filmeEncontrado.duracao} minutos.`;
    // }

    @Put('/:id')
    @ApiAcceptedResponse({ description: 'Retorna que houve sucesso na alteração.' })
    @ApiResponse({ status: 500, description: 'Retorna que houve erro na alteração.' })
    @ApiResponse({ status: 400, description: 'Retorna que há algum dado inválido na requisição.' })
    async atualizarFilme(@Param('id') id: string, @Body() novoDado: alteraFilmesDTO) {
        return this.filmeService.alterar(id, novoDado);
    }

    @Delete('/:id')
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na exclusão.' })
    @ApiResponse({ status: 500, description: 'Retorna que houve erro na exclusão.' })
    async removeFilme(@Param('id') id: string) {
        return this.filmeService.remover(id);
    }
}
