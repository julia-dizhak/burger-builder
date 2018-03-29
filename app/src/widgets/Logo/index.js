import React from 'react';

import burgerLogo from './../../assets/images/burger-logo.png';
import classes from './logo.css';

export default function Logo(props) {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="Burger" />
        </div>
    )
}
