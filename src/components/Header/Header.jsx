import { React, useState } from 'react'
import './Header.css'

function Header({openCart,setOpenCart}) {

  const [showMenu, setShowMenu] = useState(false)

  const theme_toggle = () => {
    console.log("cambiando tema ...");
  }
  //show-menu
  const toggleMenuMobile = () => {
    setShowMenu(!showMenu)
  }
  const closeMenuMobile = () => {
    setShowMenu(false)
  }
  
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.92 56.48" className="nav__logo-icon">
            <title>Academlo Logo</title>
            <g>
              <g>
                <path
                  d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z">
                </path>
              </g>
            </g>
          </svg> Store
        </a>

        <div className={showMenu?'nav__menu show-menu':'nav__menu'} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">Products</a>
            </li>
          </ul>

          <div onClick={closeMenuMobile} className="nav__close" id="nav-close">
            <i className='bx bx-x'></i>
          </div>
        </div>

        <div className="nav__btns">
          {/* Theme change button */}
          <i onClick={theme_toggle} className='bx bx-moon change-theme' id="theme-button"></i>

          <div onClick={()=>{setOpenCart(true)}} className="nav__shop" id="cart-shop">
            <i className='bx bx-shopping-bag'></i>
            <span id="cart-count" className="count"></span>
          </div>

          <div onClick={toggleMenuMobile} className="nav__toggle" id="nav-toggle">
            <i className='bx bx-grid-alt'></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header