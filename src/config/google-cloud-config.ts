import * as fs from 'fs';
import * as path from 'path';

export const configureGoogleApplication = () => {
    const dir = `${process.cwd()}`;
    const filePath = path.join(`${dir}/google-credentials.json`);
    const json = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    process.env.GOOGLE_APPLICATION_CREDENTIALS = filePath;
    if (!json) {
        throw new Error(
            'O arquivo de configuração do Google Cloud não existe na variável de ambiente GOOGLE_APPLICATION_CREDENTIALS_JSON',
        );
    }
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.writeFileSync(filePath, json);
};
