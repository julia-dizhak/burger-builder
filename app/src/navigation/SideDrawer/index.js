import React from 'react';

import classes from './sideDrawer.css';
import Backdrop from './../../widgets/Backdrop/';
import AuxHOC from './../../hoc/AuxHOC/';
import Logo from './../../widgets/Logo/';
import NavigationItems from './../NavigationItems/';

export default function SideDrawer(props) {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    // side draw menu on mobile device
    return (
        <AuxHOC>
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
        </AuxHOC>

    );
}
