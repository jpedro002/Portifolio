import { readdir, rename } from 'fs/promises';
import path from 'path';

const pasta = 'C:/Users/JOÃO6258/Documents/port/src/data'; // Caminho correto da sua pasta

async function renomearArquivos() {
  try {
    const files = await readdir(pasta);

    for (const file of files) {
      const extensao = path.extname(file);

      if (extensao === '.js') {
        const novoNome = path.basename(file, '.js') + '.jsx';
        const antigoCaminho = path.join(pasta, file);
        const novoCaminho = path.join(pasta, novoNome);

        await rename(antigoCaminho, novoCaminho);
        console.log(`Renomeado ${file} para ${novoNome}`);
      }
    }

    console.log('Arquivos renomeados com sucesso');
  } catch (err) {
    console.error('Erro:', err);
  }
}

renomearArquivos();
