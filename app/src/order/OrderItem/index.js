import React from 'react';
import classes from  './order.css';

export default function Order(props) {
    const { price, ingredients } = props;
    const ingredientsTransformed = [];

    for (let ingredientName in ingredients) {
        ingredientsTransformed.push({
            name: ingredientName, 
            amount: ingredients[ingredientName]
        }); 
    }
   
    const ingredientsOutput = ingredientsTransformed.map(ingredient => {
        return (
            <span key={ingredient.name}>
                {ingredient.name}
                {ingredient.amount}
            </span>
        )
    });

    return (
        <div className={classes.Order}>
            <p>
                Ingredients: &nbsp;
                { ingredientsOutput }
            </p>
            <p>
                Price: &nbsp;
                <strong>CHF { Number.parseFloat(price).toFixed(2) }</strong>
            </p>
        </div>     
    );
}