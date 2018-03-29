import React from 'react';
//import {range} from 'lodash';
import { withRouter } from 'react-router-dom'

import BurgerIngredient from './../Ingredient/';
import classes from './Burger.css';
//import {shuffleArray} from '../../utils/arrays';

function Burger(props) {   
    // convert object into an array of Burger ingredients
    let transformedIngredients = Object.keys(props.ingredients)
        // the map method creates a new array with the result of calling a provided function
        // on every element in the calling array
        .map(igKey => {
            // create an array with amount of given ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // JSX
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        // reduce() method applies a function against an accumulator and each element in
        // the array (from left to right) to reduce it to a single value

        // after .map() we will get array of arrays and by .reduce() - list of arrays
        // case with zero ingredients (flattened and array)
        .reduce((arr, el) => {
            // concat() method is used to merge two or more arrays (returns a new array)
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

// transformedIngredients by using lodash range
// const burger = (props) => {
//     let transformedIngredients = Object.keys(props.ingredients);
//
//     let result = [];
//     transformedIngredients.forEach((igKey)=>{
//         if (props.ingredients[igKey] > 0) {
//             range(props.ingredients[igKey]).forEach((i)=>{
//                 result.push(
//                     <BurgerIngredient key={igKey + i} type={igKey} />
//                 )
//             });
//         }
//     });
//     console.log(result);
//
//     if (result.length === 0) {
//         result = <p>Please start adding ingredients</p>
//     }
//
//     return (
//         <div className={classes.Burger}>
//             <BurgerIngredient type="bread-top" />
//             {result}
//             <BurgerIngredient type="bread-bottom" />
//         </div>
//     )
// };

export default withRouter(Burger);
