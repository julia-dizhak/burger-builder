import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Layout from './hoc/Layout/';
import BurgerBuilder from './burger/Builder';
import Checkout from './order/Checkout/';
import Orders from './order/Orders';

injectGlobal`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans Condensed', sans-serif;
      font-weight: 400;     
  }
`

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
