import React from 'react';

import classes from './Order.css';

const order = (props) => {

    let ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            count: props.ingredients[ingredientName]
        });
    }

    let ingredientsOutput = ingredients.map( ig => (
        <span
            key={ig.name}
            style={{
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px',
                border: '1px solid #ccc',
                textTransform: 'capitalize'
            }}
        >{ig.name} ({ig.count})</span>)
    );

    console.log('>>> ig:', ingredientsOutput);

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;
