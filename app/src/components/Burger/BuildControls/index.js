import React from 'react';

import classes from  './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Tomato', type: 'tomato'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}&nbsp;$</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                // type={ctrl.type} ?
                add={() => props.ingredientAdd(ctrl.type)}
                remove={() => props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}>Order now</button>
    </div>
);

export default buildControls;
