const Helpers = {
    numberToCurrency: function (value) {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(value)
    },
    getCategoryData: (prod_data)=>{
        if(prod_data.length>0){
            //Getting a Set of categories from DB data
            const categories = new Set( prod_data?.map(prod => prod.value['category']) )
            const result = Array.from(categories).map(cat => {
                return {
                    name: cat,
                    stock: prod_data
                        .filter(prod => prod.value['category'] == cat) // getting products width the same category
                        .reduce((a,b)=> a+b.value['stock'] ,0), // sum stock of all products
                    item_quantity: prod_data
                        .filter(prod => prod.value['category'] == cat).length
            }})
    
            return categories?result:[]
        }else return []
    },
    getTotalCategoryStock: (data, category)=>{
        return data
            .filter(prod => prod['category']== category)
            .reduce((a,b) => a+b['stock'],0)
    },
    getTotalCategoryItems: ()=>{

    },
    filterProducts: (products, category) =>{
        return products.filter(prod => prod.value['category']== category)
    }
}

export default Helpers