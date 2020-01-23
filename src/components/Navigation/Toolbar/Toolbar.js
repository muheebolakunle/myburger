import React from 'react';

import Logo from '../../Logo/Logo';
import styles from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENUS</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    )
}

export default toolbar;