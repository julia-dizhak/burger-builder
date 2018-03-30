import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navigationItem.css';

export default function NavigationItem(props) {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.link}
                exact
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    );
}    
