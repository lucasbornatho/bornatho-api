import { Module } from "@nestjs/common";
import { FilmesController } from "./filmes.controller";
import { DatabaseModule } from "src/database/database.module";
import { FilmeService } from "./filme.service";
import { generoProviders } from "src/genero/genero.providers";
import { GeneroService } from "src/genero/genero.service";
import { filmeProviders } from "./filmes.providers";

@Module({
    imports:[DatabaseModule],
    controllers:[FilmesController],
    providers:[...filmeProviders,
        FilmeService,
        ...generoProviders,
        GeneroService,
    ],
})

export class FilmeModule{}