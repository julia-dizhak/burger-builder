import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 1,
            tomato: 2,
            meat: 1,
            salad: 0
        }
    };

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;
