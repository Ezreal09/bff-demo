const Controller = require('./Controller');


class IndexController extends Controller {
    constructor(){
        super()
    }
    async actionIndex(ctx){
        throw new Error('test error log')
        ctx.body = await ctx.render('index');
    }
}
module.exports = IndexController;