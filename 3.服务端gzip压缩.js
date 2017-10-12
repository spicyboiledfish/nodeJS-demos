var http = require('http');
var zlib = require('zlib');
var fs = require('fs');
var filepath = './file/fileForGzip.html';

var server = http.createServer(function (req,res) {
    var acceptEncoding = req.headers['accept-encoding'];
    var gzip;

    if (acceptEncoding.indexOf('gzip')!=-1){
        console.log('进来压缩了哦');
        gzip = zlib.createGzip();

        res.writeHead(200,{
            'Content-Encoding':'gzip'
        });
        fs.createReadStream(filepath).pipe(gzip).pipe(res);
    }else {
        console.log('没有压缩哦');
        fs.createReadStream(filepath).pipe(res);
    }
});

server.listen('3000');
