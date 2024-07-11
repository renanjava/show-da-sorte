import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
  
  @ValidatorConstraint({ async: true })
  @Injectable()
  export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(private readonly usuarioService: UsuarioService) {}
  
    async validate(value: any, args: ValidationArguments) {
        const [property] = args.constraints;
        const response = await fetch(`http://localhost:4000/usuario/custom/${property}/${value}`)
        const body = await response.text()
        if(body)
            return false
        return true
    }
  }
  
  export function IsUnique(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        name: 'isUnique',
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [property],
        validator: IsUniqueConstraint,
      });
    };
  }
  