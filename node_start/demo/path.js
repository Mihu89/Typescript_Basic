// Working with paths

const path = require('path');

console.log('Get file name: ', path.basename(__filename));
console.log('Get directory name: ', path.dirname(__filename));
console.log('Get extension of file: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename).name);
console.log('Root: ', path.parse(__filename).root);
console.log('Join folder and fileName: ', path.join(__dirname, 'server', 'home.html'));
 console.log('Posix: ', path.posix);
console.log('Delimiter: ', path.delimiter);

