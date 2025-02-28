import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuariosArmazenados } from "../usuario.dm";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private clsUsuarioArmazenados:UsuariosArmazenados){}

    async validate(value: any, validationArguments?: ValidationArguments ): Promise<boolean>{
        const validarEmail = await this.clsUsuarioArmazenados.validaEmail(value);
        return !validarEmail;
    }
}

export const EmailUnico = (opcaoValidacao: ValidationOptions) => {
    return(objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: EmailUnicoValidator,
        })
    }
}