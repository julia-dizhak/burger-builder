import React, { Component } from 'react';
import * as burgerActions from './../store/actions/burger';
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
        const sum = Object.keys(ingredients).map(
            igKey => {
                return ingredients[igKey]; 
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    };
    
    purchaseHandler = () => {
        this.setState({purchasing: true});
     };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    handlePurchaseContinue = () => {
        this.props.history.push('/checkout');    
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
                        purchasable={this.updatePurchaseState(this.props.ingredients)} 
                    />
                </AuxHOC>
            );

            orderSummary = <OrderSummary
                        price={this.props.price}
                        ingredients={this.props.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.handlePurchaseContinue} 
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
        handleIngredientAdd: (ingredientName) => dispatch(burgerActions.addIngredient(ingredientName)),
        handleIngredientRemove: (ingredientName) => dispatch(burgerActions.removeIngredient(ingredientName))
    }
}

export default connect(mapStateProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
