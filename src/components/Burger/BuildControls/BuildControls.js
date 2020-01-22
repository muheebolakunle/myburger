import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const buildControls = (props) => {
    const controls = props.labels.map(label => <BuildControl
        key={label}
        label={label}
        added={() => props.addIngredient(label)}
        removed={() => props.removeIngredient(label)}
        disabled={props.disabledInfo[label]}
    />)
    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>&#x20A6; {props.price.toFixed(2)}</strong></p>
            {controls}
            <button
                className={styles.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;