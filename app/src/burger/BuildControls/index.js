import React from 'react';

import classes from  './buildControls.css';
import BuildControl from './../BuildControl/';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Tomato', type: 'tomato'}
];

export default function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}&nbsp;$</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    add={() => props.ingredientAdd(ctrl.type)}
                    remove={() => props.ingredientRemove(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>Order now</button>
        </div>
    );          
}
