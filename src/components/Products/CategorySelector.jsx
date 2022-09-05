import React from 'react';
import './CategorySelector.css'

const CategorySelector = ({ categories, filter }) => {

    return (
        <ul className="products__filters">
            <li className="products__item products__line" data-filter="all">
                <h3 className="products__title">
                    Show All
                </h3>
                <span className="products__stock">
                    show all products
                </span>
            </li>

            {
                categories?.map(cat => {
                    return (
                        <li key={`cat-${cat['name']}`} 
                            onClick={()=>filter(cat['name'])}
                            className="products__item products__line" 
                            data-filter=".{cat}">
                            <h3 className="products__title">{cat['name']}</h3>
                            <span className="products__stock">
                                {cat['stock']} products
                            </span>
                        </li>
                    )
                })
            }

            {/* <li className="products__item products__line active-product" data-filter=".hoodies">
                <h3 className="products__title">
                    Hoodies
                </h3>
                <span className="products__stock">
                    3 products
                </span>
            </li>

            <li className="products__item products__line" data-filter=".shirts">
                <h3 className="products__title">
                    Shirts
                </h3>
                <span className="products__stock">
                    4 products
                </span>
            </li>

            <li className="products__item" data-filter=".sweatshirts">
                <h3 className="products__title">
                    Sweatshirts
                </h3>
                <span className="products__stock">
                    4 products
                </span>
            </li> */}
        </ul>
    );
};

export default CategorySelector;