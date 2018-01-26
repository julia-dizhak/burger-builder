import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        // the map method creates a new array with the result of calling a provided function on every element in the calling array
        .map(igKey => {
            // transform into array
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        // reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
        .reduce((arr, el) => {
            // concat() method is used to merge two or more arrays (returns a new array)
            return arr.concat(el)
        }, []);
    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

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
