const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new  Koa();

app.use(async (ctx,next)=>{
    console.log(ctx.request.url);
    await next();
});

router.get('/',async (ctx,next)=>{
    ctx.response.body=`<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
});

router.get('/hello/:name',async (ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body='<h2>Hello My Name Is'+name+'</h2>';
    await next();
});

router.post('/signin',async (ctx,next)=>{
    var name = ctx.request.body.name;
    var password = ctx.request.body.password;
    if('root' === name && '123456'=== password){
        ctx.response.body='login success';
    }else{
        ctx.response.body='login faile';
    }
});


app.use(bodyParser());
app.use(router.routes());

app.listen('8888');
