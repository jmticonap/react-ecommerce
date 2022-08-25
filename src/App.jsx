import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Loader from './components/Loader'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)
  const [openCart, setOpenCart] = useState(true)

  const openCardToggle = () => {
    setOpenCart(!openCart)
    console.log( `openCart: ${openCart}` );
  }

  return (
    <div className="App">
      <Loader time={3000} />
      <Header openCart={openCart} setOpenCart={setOpenCart} />
      <Cart open={openCart} setOpen={setOpenCart} />
    </div>
  )
}

export default App
