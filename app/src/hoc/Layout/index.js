import React, {Component} from 'react';

import AuxHOC from './../AuxHOC';
import classes from './layout.css';
import Toolbar from './../../navigation/Toolbar/';
import SideDrawer from './../../navigation/SideDrawer/';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        // approach has a flow, this may lead to unexpected outcomes
        //this.setState({showSideDrawer: !this.state.showSideDrawer});

        // the clean way of setting the state when id depends on old state
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })

    };

    render () {
        return (
            <AuxHOC>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </AuxHOC>
        )
    }
}

export default Layout;
