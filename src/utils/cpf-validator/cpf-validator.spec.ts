import * as CpfValidator from './cpf-validator';

describe('Cpf Validator', () => {
    it('should return true if the cpf is valid', () => {
        expect(CpfValidator.isValidCpf('678.216.750-67')).toBe(true);
        expect(CpfValidator.isValidCpf('67821675067')).toBe(true);
    });

    it('should return false if the cpf is invalid', () => {
        expect(CpfValidator.isValidCpf('123.456.789-9')).toBe(false);
        expect(CpfValidator.isValidCpf('123.456.789-9')).toBe(false);
        expect(CpfValidator.isValidCpf('00000000000')).toBe(false);
        expect(CpfValidator.isValidCpf('')).toBe(false);
    });
});
