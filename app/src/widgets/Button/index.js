import React from 'react';

import classes from './button.css';

export function button (props) {
    return (
        <button
            className={[classes.button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )        
}

export default button;
