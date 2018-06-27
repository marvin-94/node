'use strict';
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var server = http.createServer(function(req,res){
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('<h3>Hello Word</h3>');
   // var dizhi = url.parse(req.href);
    var rootdir = path.resolve('.');
    var filepath =path.join(rootdir,url.parse(req.url).pathname) ;
    fs.stat(filepath,function(err,stat){
        if(!err && stat.isFile()){
            console.log('返回文件内容');
            fs.createReadStream(filepath).pipe(res);
        }else{
            res.writeHead(404);
            console.log('出错了');
            res.end();
        }
    })
});

server.listen('8910');
console.log('服务启动完成');

