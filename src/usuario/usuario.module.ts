import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuariosArmazenados } from "./usuario.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";
import { strongPassValidator } from "./validacao/senha-forte.validator";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports:[HttpModule],
    controllers:[UsuarioController],
    providers:[UsuariosArmazenados, EmailUnicoValidator, strongPassValidator]
})

export class UsuarioModule{}