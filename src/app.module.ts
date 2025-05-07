import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { FilmeModule } from './filmes/filmes.module';
import { generoModule } from './genero/genero.module';

@Module({
  imports: [UsuarioModule, FilmeModule, generoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
