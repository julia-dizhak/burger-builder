import React from 'react';

import classes from './Toolbar.css';
import Logo from './../../../shared/ui/Logo';
import NavigationItems from '../../../components/Navigation/NavigationItems';
import DrawerToggle from '../../../components/Navigation/SideDrawer/DrawerToggle';

export default function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height="80%" />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}
