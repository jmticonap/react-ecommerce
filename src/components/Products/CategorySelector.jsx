import React from 'react';
import './CategorySelector.css'

const CategorySelector = ({ categories, filter }) => {

    return (
        <ul className="products__filters">
            <li className="products__item products__line" 
                onClick={()=>filter()}
                data-filter="all">
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
                            data-filter={cat['name']}>
                            <h3 className="products__title">{cat['name']}</h3>
                            <span className="products__stock">
                                {cat['stock']} products
                            </span>
                        </li>
                    )
                })
            }

        </ul>
    );
};

export default CategorySelector;