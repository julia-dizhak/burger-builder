import React from 'react';

import classes from './navigationItems.css';
import NavigationItem from './../NavigationItem';

export default function NavigationItems() { 
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders (or checkout)</NavigationItem>
        </ul>
    );
};

