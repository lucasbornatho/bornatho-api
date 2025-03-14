import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { FilmeModule } from './filmes/filmes.module';

@Module({
  imports: [UsuarioModule, FilmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
