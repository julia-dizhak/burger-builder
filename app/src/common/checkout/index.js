import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ContactData from '../ContactData';
import CheckoutSummary from '../Order/CheckoutSummary/index.js';

export default class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }
 
    // executed before the node is inserted into the DOM
    componentWillMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for (let param of query.entries()) {
            // ['salad, '1']
            if (param[0] === 'price') {
                price = param[1]
            }
            else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        });
    }
    
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
                    {/* component={ContactData} /> */}
                
            </div>
        )
    }
}
