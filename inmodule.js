//内置模块
//文件相关 fs
var fs = require('fs');
//异步读取文件
fs.readFile('123.txt','utf-8',function(err,data){
    if(err){
        console.log('出错了：'+err);
    }else{
        console.log('内容为：'+data);
    }
})
//同步读取文件
var data = fs.readFileSync('456.txt');
console.log(data.toString('utf-8'));
//异步写入文件
var str = "我是678.txt"
fs.writeFile('678.txt',str,function(err){
    if(err){
        console.log('出错了：'+err);
    }else{
        console.log('存储成功');
    }
})
//异步写入文件
var buffer = Buffer.from('我是8910','utf-8');
fs.writeFileSync('8910.txt',buffer);
//查看文件状态
fs.stat('8910.txt',function(err,stat){
    console.log(stat);
})

//流相关
//读取流
var instream = fs.createReadStream('123.txt','utf-8');
instream.on('data',function(data){
    console.log(data);
});
instream.on('end',function(){
    console.log("读取完毕");
})
instream.on('error',function(err){
    console.log('出现异常'+err);
})

//写入流
var outstream = fs.createWriteStream('111.txt','utf-8');
outstream.write('我是1');
outstream.write('我是2');
outstream.end();