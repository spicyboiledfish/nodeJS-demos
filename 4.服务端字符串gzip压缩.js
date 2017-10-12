var http = require('http');
var zlib = require('zlib');

var responseText = 'Hey Man!';

var server = http.createServer(function (req,res) {
    var acceptEncoding = req.headers['accept-encoding'];
    if(acceptEncoding.indexOf('gzip')!=-1){
        console.log('进来了呀',req.headers);
        res.writeHead(200,{
            'content-encoding':'gzip'
        });
        res.end(zlib.gzipSync(responseText));
    }else {
        console.log('没有进来了呀');
        res.end(responseText);
    }
});

server.listen('4000');