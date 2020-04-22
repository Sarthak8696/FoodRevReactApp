import React from 'react';
import './HeaderComponent.scss';

import {connect} from 'react-redux';
import {hamburgerMenuOpen,hamburgerMenuClose} from '../../actions'

class HeaderComponent extends React.Component {

    toggleHamburgerMenu = () => {
        if(this.props.hamburgerMenu.menuOpen===false){
            this.props.hamburgerMenuOpen();
        }
        else this.props.hamburgerMenuClose();
    }

    render() {
        const hamburgerIconClass = this.props.hamburgerMenu.menuOpen ? "close-icon" : "open-icon";
        return (
            <header id="header">
                <div className="hamburger-container" onClick={this.toggleHamburgerMenu}>
                    <span className={"hamburger-icon-1 " + hamburgerIconClass}></span>
                    <span className={"hamburger-icon-2 " + hamburgerIconClass}></span>
                    <span className={"hamburger-icon-3 " + hamburgerIconClass}></span>
                </div>
                <span className="header-logo">FoodRev</span>
            </header>
        )
    }
};

const mapStateToProps = state => {
    return {hamburgerMenu: state.hamburgerMenu}
}

export default connect(mapStateToProps,{hamburgerMenuOpen,hamburgerMenuClose})(HeaderComponent);