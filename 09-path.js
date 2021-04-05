const path = require('path');
// base 
console.log(path.sep);

// diretiorio do arquivo
const filePath = path.join('/content/', 'sub-folter', 'test.txt')
console.log(filePath);

// Retorna o nome do arquivo
console.log(path.basename(filePath));

// Retorna o caminho a absolute (Plataforma)
const absolute = path.resolve(__dirname, 'content', 'sub-folder', 'test.txt');
console.log(absolute);
