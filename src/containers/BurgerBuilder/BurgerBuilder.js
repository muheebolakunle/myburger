import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildContols';

const INGREDIENT_PRICES = {
    'meat': 200,
    'bacon': 200,
    'cheese': 100,
    'salad': 150
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            'meat': 0,
            'bacon': 0,
            'cheese': 0,
            'salad': 0
        },
        totalPrice: 300,
        purchasable: false
    }

    updatePurchaseState = (updatedState) => {
        const ingredients = {
            ...updatedState.ingredients
        }
        const purchase = Object.keys(ingredients)
            .map(type => ingredients[type])
            .reduce((sum, el) => sum + el, 0);
        this.setState({ purchasable: purchase > 0 });

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];

        const updatedState = {
            ...this.state
        }
        updatedState.ingredients[type] = updatedCount;
        updatedState.totalPrice = updatedPrice;
        this.setState(updatedState);
        this.updatePurchaseState(updatedState);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENT_PRICES[type];

        const updatedState = {
            ...this.state
        }
        updatedState.ingredients[type] = updatedCount;
        updatedState.totalPrice = updatedPrice;
        this.setState(updatedState);
        this.updatePurchaseState(updatedState);

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    labels={Object.keys(this.state.ingredients)}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>

        )
    }
}

export default BurgerBuilder;