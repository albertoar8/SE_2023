
const A = require('arcsecond');
const B= require('arcsecond-binary');
const fs = require('fs');
const path=require('path');

const file= fs.readFileSync(path.join(__dirname,'./07 Melao.wav'));

console.log(file.buffer.byteLength);
