const Router = require('@koa/router');
const IndexController = require('./IndexController');
const ApiController = require('./ApiController')

const indexController = new IndexController();
const apiController = new ApiController();

const router = new Router();

function initController(app) {
    router.get('/', indexController.actionIndex);
    router.get('/data/getDataList', apiController.actionDataList);

    app
        .use(router.routes())
        .use(router.allowedMethods());
}

module.exports = initController;