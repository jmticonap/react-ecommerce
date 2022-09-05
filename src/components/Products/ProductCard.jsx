import { React, useState } from 'react';
import Helpers from '../Helpers.js'

const ProductCard = ({product}) => {

    const [currentStock, setCurrentStock] = useState( product.stock )

    const addToCart = () => {
        setCurrentStock(currentStock-1)
        //TODO: addToCart
    }

    return (
        <article className={`products__card ${product.category}`}>
            <div className="products__shape">
                <img src={`${product.imagePath}`} alt={product.name} className="products__img" />
            </div>

            <div className="products__data">
                <h2 className="products__price">
                    {Helpers.numberToCurrency(product.price)} 
                    <span className="products__quantity">| Stock: {currentStock}</span>
                </h2>
                <h3 className="products__name">{product.name}</h3>

                <button onClick={addToCart} className="button products__button" data-id="${product.id}">
                    <i className='bx bx-plus'></i>
                </button>
            </div>
        </article>
    );
}

export default ProductCard;