import Controller from './Controller';
import BooksModel from '../models/BooksModel';

class BooksController extends Controller {
    constructor() {
        super()
    }
    async actionBooksListPage(ctx) {
        const booksModel = new BooksModel();
        const data = await booksModel.getBooksList();
        ctx.body = await ctx.render('books/list', {data});
    }
}

export default BooksController;