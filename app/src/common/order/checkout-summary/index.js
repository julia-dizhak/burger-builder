import React from 'react';
import Burger from '../../../components/Burger/index.js';
import Button from '../../../components/UI/Button';

import classes from '../checkout-summary/checkout-summary.css';

export default function CheckoutSummary(props) {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>

            <div className={classes.BurgerContainer}>
                <Burger ingredients={props.ingredients} />  
            </div>    

            <Button 
                btnType="Danger"
                clicked="">cancel</Button>  
            <Button 
                btnType="Success"
                clicked="">continue</Button>  
        </div>
    )
}
