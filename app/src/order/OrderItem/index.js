import React from 'react';
import classes from  './order.css';

export default function Order(props) {
    return (
        <div className={classes.Order}>
            <p>Ingredients: Salad (1)</p>
            <p>Price: <strong>CHF 5.45</strong></p>
        </div>     
    );
}