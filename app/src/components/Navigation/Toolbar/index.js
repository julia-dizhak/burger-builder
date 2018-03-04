import React from 'react';

import classes from './Toolbar.css';
import Logo from './../../../widgets/Logo';
import NavigationItems from '../../Navigation/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>

);

export default toolbar;
