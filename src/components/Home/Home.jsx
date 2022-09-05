import React from 'react';
import './Home.css'

const Home = ({imgSrc}) => {
    return (
        <section className="home" id="home">
            <div className="home__container container grid">
                <div className="home__img-bg">
                    <img src={imgSrc} alt="" className="home__img" />
                </div>

                <div className="home__data">
                    <h1 className="home__title">New Sweatshirt <br/> COLLECTIONS 2022</h1>
                    <p className="home__description">
                        Latest arrival of the new Hanes Midweight Crewneck sweatshirt imported from the 2022 series, with a modern
                        design.
                    </p>
                    <span className="home__price">S/ 14.00</span>

                    <div className="home__btns">
                        <a href="#" className="button button--gray button--small">
                            Discover
                        </a>

                        <button className="button home__button">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;