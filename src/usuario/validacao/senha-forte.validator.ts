import * as zxcvbn from 'zxcvbn';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, ValidationOptions, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
 
@Injectable()
@ValidatorConstraint({async: true})
 
export class strongPassValidator implements ValidatorConstraintInterface{
 
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        var validarSenha = false;
        if(value){
            const result = zxcvbn(value);
            var validarSenha = (result.score <= 2);
        }
        return !validarSenha;
    }
 
}
 
export const SenhaForte = (opcaoValidacao: ValidationOptions) => {
    return (object: Object, propriedade: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: strongPassValidator,
 
        })
    }
}
 