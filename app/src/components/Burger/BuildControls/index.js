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
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                // type={ctrl.type}
                add={() => props.ingredientAdd(ctrl.type)} />
        ))}
    </div>
);

export default buildControls;
