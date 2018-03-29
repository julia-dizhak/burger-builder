import React from 'react';

import classes from './buildControl.css';

export default function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.remove}
                disabled={props.disabled}>
                remove ingredient
            </button>
            <button
                className={classes.More}
                onClick={props.add}>
                add ingredient
            </button>
        </div>
    )        
}
