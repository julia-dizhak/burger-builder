import React from 'react';

import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/';
import Aux from '../../../hoc/Aux';
import Logo from '../../Logo/';
import NavigationItems from '../NavigationItems';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    // side draw menu on mobile device
    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    )
};

export default sideDrawer;
