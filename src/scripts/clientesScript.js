const fs = require('fs');
const path = require('path');

const pastaCaminho = 'C:\\Users\\peter\\OneDrive - ROOTKey\\11. Grupo Investe\\cl'; // Substitua pelo caminho da sua pasta

// Função para ler os nomes dos arquivos na pasta
function obterNomesDeArquivos(caminho) {
    return fs.readdirSync(caminho);
}

// Função para criar o JSON com os URLs
function criarJsonComUrls(nomesDeArquivos) {
    const baseUrl = 'https://media.grupoinveste.pt/cl/';
    const urls = nomesDeArquivos.map(nome => `${baseUrl}${nome}`);
    return JSON.stringify(urls, null, 2);
}

// Executar o script
try {
    const nomesDeArquivos = obterNomesDeArquivos(pastaCaminho);
    const jsonComUrls = criarJsonComUrls(nomesDeArquivos);

    fs.writeFileSync('imagens.json', jsonComUrls, 'utf-8');
    console.log('JSON criado com sucesso!');
} catch (erro) {
    console.error('Ocorreu um erro:', erro);
}