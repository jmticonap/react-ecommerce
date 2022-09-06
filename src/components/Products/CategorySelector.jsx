import React, { useEffect, useState } from 'react';
import './CategorySelector.css'
import CategorySelectorItem from './CategorySelectorItem';

const CategorySelector = ({ categories, filter }) => {
    const [activeCategory, setActiveCategory] = useState('0')

    const makeKey = (category)=>`cat-${category['name']}`
    //CategorySelectorItem
    const selectCategory = (category) => {
        setActiveCategory(makeKey(category))
        document
            .querySelector("#li_all_products")
            .classList.remove('products__filters__active')
        filter(category['name'], makeKey(category))
    }

    useEffect(() => {
        const li_categories = document.querySelectorAll(".products__item, .products__line")
        li_categories.forEach(element => {
            element.addEventListener('click', function () {
                this.classList.remove("products__filters__active")
            })
        })
        const all_products = document.querySelector("#li_all_products")
        all_products.addEventListener('click', function(){
            this.classList.add('products__filters__active')
            setActiveCategory('0')
        })
        console.log(li_categories);
    }, [])

    return (
        <ul className="products__filters">
            <li id="li_all_products" className="products__item products__line products__filters__active"
                onClick={() => filter()}
                data-filter="all">
                <h3 className="products__title">
                    Show All
                </h3>
                <span className="products__stock">
                    show all products
                </span>
            </li>

            {
                categories?.map(cat => (<CategorySelectorItem
                        key={makeKey(cat)}
                        category={cat}
                        onSelectCategory={()=>selectCategory(cat)}
                        isActive={`cat-${cat['name']}` === activeCategory} />))
            }

        </ul>
    );
};

export default CategorySelector;