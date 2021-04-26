const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
  ctx.body = 'Hello Koa 框架';
});

app.listen(3000, async ()=>{
  console.log('Example app listening on port 3000!');
});