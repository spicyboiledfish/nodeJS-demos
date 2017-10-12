var fs = require('fs');
var zlib = require('zlib');


//1.压缩
var gzip = zlib.createGzip();

var inFile1 = fs.createReadStream('./file/test.txt');
var outFile1 = fs.createWriteStream('./file/test.txt.gz');


inFile1.pipe(gzip).pipe(outFile1);   //将inFile1获取的test.txt文件，经过gzip压缩，然后再压缩成.gz文件输出出来









