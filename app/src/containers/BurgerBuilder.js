import React, {Component} from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';

import Modal from '../components/UI/Modal/';
import OrderSummary from '../components/Burger/OrderSummary/';


const INGREDIENT_PRICES = {
    cheese: 0.9,
    tomato: 0.7,
    meat: 2.1,
    salad: 0.5,
    bacon: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            tomato: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    };

    updatePurchaseState (ingredients) {
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

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; //  value of each key {salad: true, meat: false, ...}
        }

        return (
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdd={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </Aux>
        );
    }
}

export default BurgerBuilder;
