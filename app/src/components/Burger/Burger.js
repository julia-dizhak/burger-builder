import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // transform into array
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });

            }
        );

    return (
        <div className={classes.Burger}>
            {/*<BurgerIngredient type="bread-top" />*/}
            {/*<BurgerIngredient type="cheese" />*/}
            {/*<BurgerIngredient type="tomato" />*/}
            {/*<BurgerIngredient type="meat" />*/}
            {/*<BurgerIngredient type="salad" />*/}
            {/*<BurgerIngredient type="bread-bottom" />*/}

            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )

};

export default burger;
