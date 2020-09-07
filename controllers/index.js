import Router from '@koa/router';
import IndexController from './IndexController';
import ApiController from './ApiController';
import BooksController from './BooksController'

const indexController = new IndexController();
const apiController = new ApiController();
const booksController = new BooksController();
const router = new Router();

function initController(app) {
    router.get('/', indexController.actionIndex);
    router.get('/data/getBooksList', apiController.actionBooksList);
    router.get('/books/list', booksController.actionBooksListPage);


    app
        .use(router.routes())
        .use(router.allowedMethods());
}

export default initController;