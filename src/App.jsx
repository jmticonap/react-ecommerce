import { useState, useEffect } from 'react'
import './App.css'
import Db from './components/db.js'
import Loader from './components/Loader'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Main from './components/Main/Main'
import CategorySelector from './components/Products/CategorySelector'
import ProductCard from './components/Products/ProductCard'

function App() {
  const [openCart, setOpenCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const openCardToggle = () => {
    setOpenCart(!openCart)
    console.log(`openCart: ${openCart}`);
  }

  useEffect(() => {
    //Db.createLocalDb()
    //console.log( Db.getCategoryList() );
    //console.log(Db.getProductsByCategory("runner"));
  })

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
          <CategorySelector />

          <div className="products__content grid" id="products__content">
            {Db.products().map(prod => <ProductCard key={`prod-${prod.id}`} product={prod} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
