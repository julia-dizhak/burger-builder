import React from 'react';

import Burger from './../../burger/BurgerItem/';
import Button from './../../widgets/Button/';

import classes from './checkout-summary.css';

export default function CheckoutSummary(props) {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>

            <div className={classes.BurgerContainer}>
                <Burger ingredients={props.ingredients} />  
            </div>    

            <Button 
                btnType="danger"
                clicked={props.checkoutCancelled}>cancel</Button>  
            <Button 
                btnType="success"
                clicked={props.checkoutContinued}>continue</Button>  
        </div>
    )
}
