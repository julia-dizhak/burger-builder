import React from 'react';

import classes from './toolbar.css';
import Logo from './../../widgets/Logo';
import NavigationItems from './../../navigation/NavigationItems/';
import DrawerToggle from './../../navigation/DrawerToggle/';

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
