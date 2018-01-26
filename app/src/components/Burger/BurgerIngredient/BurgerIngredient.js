import React, {Component} from "react";

import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;

            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;

            case ('meat'):
                <div className={classes.Meat}></div>
                break;

            case ('cheese'):
                <div className={classes.Cheese}></div>
                break;

            case ('bacon'):
                <div className={classes.Meat}></div>
                break;

            case ('salad'):
                <div className={classes.Meat}></div>
                break;

            default:
                ingredient = null;
        }
        return ingredient
    }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
