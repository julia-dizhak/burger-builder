import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ContactData from './ContactData';
import CheckoutSummary from '../order/checkout-summary/index.js';

export default class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount = () => {
      const query = new URLSearchParams(this.props.location.search);
      const ingredients = {};
      for (let param of query.entries()) {
          // ['salad, '1']
          ingredients[param[0]] = +param[1];
      }
      this.setState({
          ingredients: ingredients
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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
                
            </div>
        )
    }
}
