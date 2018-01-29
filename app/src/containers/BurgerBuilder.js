import React, {Component} from "react";

import Aux from "../hoc/Aux";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls";


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
            cheese: 0,
            tomato: 0,
            meat: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4
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
    };

    // deduction an ingredient
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type],
            updatedCount = oldCount - 1,
            updatedIngredients = {
                ...this.state.ingredients
            };

        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type],
            oldPrice = this.state.totalPrice,
            newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdd={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
