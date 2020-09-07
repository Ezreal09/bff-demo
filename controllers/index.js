import Router from '@koa/router';
import IndexController from './IndexController';
import ApiController from './ApiController';

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

export default initController