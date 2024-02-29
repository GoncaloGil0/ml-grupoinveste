const fs = require('fs');
const path = require('path');

const pastaCaminho = "C:\\Users\\peter\\Downloads\\Editadas";

function obterNomesDeArquivos(caminho) {
    return fs.readdirSync(caminho);
}

function criarJsonComUrls(nomesDeArquivos) {
    const baseUrl = 'https://media.grupoinveste.pt/gp/person/';

    const jsonResult = nomesDeArquivos.map(nomeArquivo => {
        const [primeiro, ultimo] = nomeArquivo.split('_');
        const nomeCompleto = `${primeiro} ${ultimo.replace('.jpg', '')}`;

        return {
            nome: nomeCompleto,
            link: `${baseUrl}${nomeArquivo}`
        };
    });

    return JSON.stringify(jsonResult, null, 2);
}

try {
    const nomesDeArquivos = obterNomesDeArquivos(pastaCaminho);
    const jsonComUrls = criarJsonComUrls(nomesDeArquivos);

    fs.writeFileSync('imagens.json', jsonComUrls, 'utf-8');
    console.log('JSON criado com sucesso!');
} catch (erro) {
    console.error('Ocorreu um erro:', erro);
}