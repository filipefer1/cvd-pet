import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { isValidCpf } from '../utils/cpf-validator/cpf-validator';

@ValidatorConstraint({ name: 'CpfValidator', async: false })
export class CpfValidator implements ValidatorConstraintInterface {
    validate(text: string): boolean {
        if (typeof text != 'string') {
            return false;
        }
        return isValidCpf(text);
    }

    defaultMessage(): string {
        return 'CPF inválido';
    }
}
