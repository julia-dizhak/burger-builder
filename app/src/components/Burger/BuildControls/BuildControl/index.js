import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>remove ingredient</button>
        <button className={classes.More}>add ingredient</button>
    </div>
);

export default buildControl;
