import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     cheese: 1,
        //     tomato: 1,
        //     meat: 1,
        //     salad: 1
        // }

        ingredients: {
            cheese: 0,
            tomato: 0,
            meat: 0,
            salad: 0
        }
    };

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
