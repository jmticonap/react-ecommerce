
import db_info from '../assets/img-db.json'

const Db = {
    products: function(){
        return JSON.parse( window.localStorage.getItem('products_db') )
    },
    createLocalDb: function(){
        window.localStorage.setItem('products_db', JSON.stringify(db_info))
        return this
    },
    getCategoryList: function(){
        const category_list = new Set()
        this.products().forEach(itm => {
            itm.category.forEach(cat => {
                category_list.add( cat )
            })
        })
        return category_list
    },
    getProductsByCategory: function(category){
        return this.products().filter( prod => prod.category.includes( category ) )
    }
}

export default Db