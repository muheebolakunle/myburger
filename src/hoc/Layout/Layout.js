import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,

    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.closeSideDrawerHandler} />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;