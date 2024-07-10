import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  import { UsuarioService } from 'src/usuario/usuario.service';
  
  @ValidatorConstraint({ async: true })
  export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(private readonly usuarioService: UsuarioService) {}
  
    async validate(value: string, args: ValidationArguments) {
      const [field] = args.constraints;
      console.log(field, value)
      const existingEntity = await this.usuarioService.findByCustom(field, value);
      return !existingEntity;
    }
  
    defaultMessage(args: ValidationArguments) {
      const [field] = args.constraints;
      return `${field} ${args.value} já está em uso.`;
    }
  }
  
  export function IsUniqueCustom(field: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      console.log("oi");
      registerDecorator({
        name: 'isUniqueCustom',
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [field],
        validator: IsUniqueConstraint,
        async: true,
      });
    };
  }