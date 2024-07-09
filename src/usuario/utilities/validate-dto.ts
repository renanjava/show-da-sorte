import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export const validateDto = async (dtoClass: any, data: any) => {
  const dtoInstance = plainToClass(dtoClass, data);
  const errors = await validate(dtoInstance);
  const errorMessages = errors.reduce((acc, err) => {
    if (err.constraints) {
      acc[err.property] = Object.values(err.constraints).join(', ');
    }
    return acc;
  }, {});
  return errorMessages;
};

export default validateDto