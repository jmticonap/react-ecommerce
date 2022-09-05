import React from 'react';
import './Main.css'
import Home from '../Home/Home';
import imgHome from '../../assets/img/home.png'


const Main = () => {
    return (
        <div className='main'>
           <Home imgSrc={imgHome} /> 
        </div>
    );
};

export default Main;