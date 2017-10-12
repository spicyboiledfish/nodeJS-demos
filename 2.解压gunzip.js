var fs = require('fs');
var zlib = require('zlib');

//2.解压
var gunzip = zlib.createGunzip();

var inFile2 = fs.createReadStream('./file/test.txt.gz');
var outFile2 = fs.createWriteStream('./file/test1.txt');

inFile2.pipe(gunzip).pipe(outFile2);  //将inFile2获取的test.txt.gz文件，讲过gunzip解压，然后解压成test

