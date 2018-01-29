import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.remove}>
            remove ingredient
        </button>
        <button
            className={classes.More}
            onClick={props.add}>
            add ingredient
        </button>
    </div>
);

export default buildControl;
