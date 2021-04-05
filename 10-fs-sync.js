const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const firstWrite = writeFileSync(
    './content/first.txt',
    'Hello World on Node js!',
    { flag: 'a' });

console.log(firstWrite, first);