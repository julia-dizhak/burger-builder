import React, { Component } from 'react';
import * as actionTypes from './../store/actions';
import { connect } from 'react-redux';

import AuxHOC from './../hoc/AuxHOC';
import Burger from './BurgerItem/';
import BuildControls from './BuildControls/';

import Modal from './../widgets/Modal/';
import OrderSummary from './../order/OrderSummary/';
import Spinner from './../widgets/Spinner/';

import axios from './../utils/axios-orders';
import WithErrorHandler from './../hoc/WithErrorHandler';

class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    // called immediately after the node is inserted into the DOM
    componentDidMount() {
        // axios.get('https://react-burger-builder-dizhak.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data})
        //     })
        //     .catch(error => {
        //         this.setState({error: true})
        //     })
    }

    updatePurchaseState(ingredients) {
        // total amount of ingredients
        const sum = Object.keys(ingredients).map(
            igKey => {
                return ingredients[igKey]; // array of values
            })
            // sum of all ingredients
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0});
    };
    
    purchaseHandler = () => {
         this.setState({purchasing: true});
     };

     purchaseCancelHandler = () => {
         this.setState({purchasing: false})
     };

     purchaseContinueHandler = () => {
       // switch page on push
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });    
     };

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; //  value of each key {salad: true, meat: false, ...}
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if (this.props.ingredients) {
            burger = (
                <AuxHOC>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        addIngredient={this.props.handleIngredientAdd}
                        removeIngredient={this.props.handleIngredientRemove}
                        disabled={disabledInfo}
                        price={this.props.price}
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable} 
                    />
                </AuxHOC>
            );

            orderSummary = <OrderSummary
                        price={this.props.price}
                        ingredients={this.props.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} 
                    />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <AuxHOC>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    { orderSummary }
                </Modal>
                { burger }
            </AuxHOC>
        );
    }
}

const mapStateProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIngredientAdd: (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName}),
        handleIngredientRemove: (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName})
    }
}

export default connect(mapStateProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
