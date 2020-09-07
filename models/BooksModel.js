import axios from 'axios'

class BooksModel {
    
    getBooksList(){
        return axios.get('http://xxx').catch(e => {
            return [{
                id:1,
                name: '《js高级程序设计》'
            },{
                id:2,
                name: '《js语言精粹》'
            }]
        })
    }
}

export default BooksModel;
