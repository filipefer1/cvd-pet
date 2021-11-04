export const isValidCpf = (str: string) => {
    if (!str) return false;
    const cpfsConhecidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ];
    let Soma = 0;
    let Resto;
    const strCpf = str.replace(/\D/g, '');
    for (const cpf of cpfsConhecidos) {
        if (strCpf === cpf) return false;
    }

    for (let i = 1; i <= 9; i += 1)
        Soma += parseInt(strCpf.substring(i - 1, i), 10) * (11 - i);
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCpf.substring(9, 10), 10)) return false;
    Soma = 0;
    for (let i = 1; i <= 10; i += 1)
        Soma += parseInt(strCpf.substring(i - 1, i), 10) * (12 - i);
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCpf.substring(10, 11), 10)) return false;
    return true;
};
