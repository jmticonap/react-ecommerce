import { React, useState } from 'react';
import './Cart.css'

const Card = ({open, setOpen, onCheckout}) => {
    const cart_class_hide = 'cart'
    const cart_class_show = 'cart show-cart'
    const card_close = () => {
        console.log("Ocultar cart");
        setOpen(false)
        console.log(`Valor de OPEN: ${open}`);
    }

    return (
        <div className={open?cart_class_show:cart_class_hide} id="cart">
            <i onClick={card_close} className='bx bx-x cart__close' id="cart-close"></i>

            <h2 className="cart__title-center">My Cart</h2>

            <div className="cart__container"></div>

            <div className="cart__prices">
                <span className="cart__prices-item"><span id="items-count"></span> items</span>
                <span className="cart__prices-total" id="cart-total"></span>
            </div>

            <div className="cart__checkout">
                <button onClick={onCheckout} className="button cart__btn" id="cart-checkout" disabled>
                    <i className='bx bxs-check-shield'></i> Checkout
                </button>
            </div>

        </div>
    );
};

export default Card;