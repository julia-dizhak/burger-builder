import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    // transform ingredients objects in a list item: <li>Salad: 1</li>
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                // ? why it should be unique key here
                <li key={igKey}>
                    <span style={ {textTransform: 'capitalize'} }>{igKey}</span>:
                    {props.ingredients[igKey]}
                </li>
            )
        });

    return (
       <Aux>
           <h3>Your order</h3>
           <p>A delicious burger with the following ingredients:</p>
           <ul>
               {ingredientSummary}
           </ul>
           <p>Continue to checkout?</p>
       </Aux>
   )
};

export default orderSummary;
