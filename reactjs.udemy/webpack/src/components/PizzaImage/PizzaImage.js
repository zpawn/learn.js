import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = () => (
    <div className={classes.PizzaImage}>
        <img className={classes.PizzaImage} src={PizzaImg} alt=""/>
    </div>
);

export default pizzaImage;
