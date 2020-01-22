import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients)
        .map((IgKey) => <li key={IgKey}><span style={{ textTransform: 'capitalize' }}>{IgKey}</span>: {props.ingredients[IgKey]}</li>)
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default orderSummary;