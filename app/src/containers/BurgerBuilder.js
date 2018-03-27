import React, {Component} from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger';
import BuildControls from '../components/Burger/BuildControls';

import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary';
import Spinner from '../components/UI/Spinner';

import axios from './../utils/axios-orders';
import withErrorHandler from '../hoc/withErrorHandler';


const INGREDIENT_PRICES = {
    cheese: 0.9,
    tomato: 0.7,
    meat: 2.1,
    salad: 0.5,
    bacon: 1.3
};

class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     tomato: 0,
        //     meat: 0
        // },
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    // called immediately after the node is inserted into the DOM
    componentDidMount() {
        console.log(this.props);
        axios.get('https://react-burger-builder-dizhak.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
            })
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
        console.log(sum);
        this.setState({purchasable: sum > 0});
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type],
            updatedCount = oldCount + 1,
            updatedIngredients = {
                ...this.state.ingredients // state should be updated in immutable way
            };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type], // added less/more ingredients once unit at time so don't need multiply
            oldPrice = this.state.totalPrice,
            newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    // deduction an ingredient
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        // if ingredients are less then or equal 0
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1,
            updatedIngredients = {
                ...this.state.ingredients
            };

        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type],
            oldPrice = this.state.totalPrice,
            newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
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
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; //  value of each key {salad: true, meat: false, ...}
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdd={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable} />
                </Aux>
            );

            orderSummary = <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
