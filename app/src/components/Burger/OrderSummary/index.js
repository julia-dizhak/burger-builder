import React from 'react';

import Aux from '../../../hoc/Aux/';
import Button from './../../../shared/ui/Button';

const orderSummary = (props) => {
    // will be accessible if turn to class component
    // componentWillUpdate() {
    //     console.log('[OrderSummary] WillUpdate')
    // }

    // transform ingredients objects in a list item: <li>Salad: 1</li>
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                // ? why it should be unique key here
                <li key={igKey}>
                    <span style={ {textTransform: 'capitalize'} }>{igKey}</span>:&nbsp;
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
           <p><strong>Total price: {props.price.toFixed(2)}</strong></p>

           <Button
               btnType="danger"
               clicked={props.purchaseCancelled}
               className>Cancel</Button>
           <Button
               btnType="success"
               clicked={props.purchaseContinued}
               className>Continue</Button>
       </Aux>
   )
};

export default orderSummary;
