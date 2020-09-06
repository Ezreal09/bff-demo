const Koa = require('koa');
const render = require('koa-swig');
const co = require('co');
const staticServe = require('koa-static');

const config = require('./config');
const initController = require('./controllers');
const errorHander = require('./middlewares/errorHandler');

const app = new Koa();

//错误日志配置
const log4js = require("log4js");
log4js.configure({
  appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
  categories: { default: { appenders: ["globalError"], level: "error" } }
});
const logger = log4js.getLogger("cheese");


//swig 模版
app.context.render = co.wrap(render({
    root: config.viewsDir,
    cache: config.cache,
    varControls:['[[',']]']
}));

//初始化中间件
app.use(staticServe(config.staticDir));

//错误处理
errorHander.error(app, logger);
//初始化路由
initController(app);

app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
})