//@stcgoal Getting clipboard in NodeJS, thanks to : https://github.com/sindresorhus/clipboardy


const clipboardy = require('clipboardy');

//clipboardy.writeSync('🦄');

var r = clipboardy.readSync();

//

console.log(r);