import React from 'react';
import styled from 'styled-components';

const IngredientStyle = styled.span`
   text-transform: capitalize;
   display: inline-block;
   margin: 0 8px 0 0;
   border: 1px solid #ccc;
   padding: 5px;
`;

function _Order(props) {
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
            <IngredientStyle key={ingredient.name}>
                { ingredient.name }&nbsp;
                ({ ingredient.amount })
            </IngredientStyle> 
        )
    });

    return (
        <div className={props.className}>
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

const Order = styled(_Order)`
    width: 100%;
    border: 1px solid #eee;
    box-shadow: 0 1px 2px #ccc;
    padding: 10px;
    margin: 0 auto 15px;
    box-sizing: border-box;
`;

export default Order;