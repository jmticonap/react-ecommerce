import { useState, useEffect } from 'react'
import mixitup from 'mixitup'
import './App.css'
import Helper from './components/Helpers.js'
import useData from './hooks/useProductsData'
import Loader from './components/Loader'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Main from './components/Main/Main'
import CategorySelector from './components/Products/CategorySelector'
import ProductCard from './components/Products/ProductCard'

function App() {
  const {data:db} = useData()
  const [currentProducts, setCurrentProducts] = useState([])
  const [openCart, setOpenCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const openCardToggle = ()=>{
    setOpenCart(!openCart)
    console.log(`openCart: ${openCart}`);
  }
  const filterProducts = (category)=>{
    setCurrentProducts(category?Helper.filterProducts(db, category):db)
  }

  useEffect(() => {
    //Db.createLocalDb()
    //console.log( Db.getCategoryList() );
    //console.log(Db.getProductsByCategory("runner"));
    mixitup('#products__content', {
      selectors: {
        target: '.products__card'
      },
      animation: {
        duration: 300
      }
    }).filter('all')
  },[])
  useEffect(()=> setCurrentProducts(db), [db])
  
  return (
    <div className="App">
      <Loader time={3000} />
      <Header
        openCart={openCart} setOpenCart={setOpenCart}
        showMenu={showMenu} setShowMenu={setShowMenu} />
      <Cart open={openCart} setOpen={setOpenCart} />
      <Main />
      <section className="products" id="products">
        <div className="products__container container">
          <CategorySelector categories={db?Helper.getCategoryData(db):null} filter={filterProducts} />

          <div className="products__content grid" id="products__content">
            {currentProducts?.map(prod => <ProductCard key={`prod-${prod.value.id}`} product={prod.value} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
