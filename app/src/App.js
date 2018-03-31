import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/';
import BurgerBuilder from './burger/Builder';
import Checkout from './order/Checkout/';
import Orders from './order/Orders';

export default class App extends Component {
    render() {
        return (
            <div>
                menu
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/" exact component={BurgerBuilder} />
                    </Switch>     
                </Layout>
            </div>
        );
    }
}
