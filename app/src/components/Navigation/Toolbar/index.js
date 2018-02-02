import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo';
import NavigationItems from '../../Navigation/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo
            height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>

);

export default toolbar;
