import React from 'react';
import './HamburgerMenu.scss';
import HamburgerMenuListItem from './HamburgerMenuListItem'
import {connect} from 'react-redux';

class HamburgerMenu extends React.Component {

    render() {
        const menuClass = this.props.hamburgerMenu.menuOpen ? "open" : "close";
        return (
           <div className={"menu "+menuClass}>
            <div className="menu-header">MENU
            </div>
                <ul className="menu-list-items-container">
                    <HamburgerMenuListItem iconName="fas fa-home" iconText="Home"/>
                    <HamburgerMenuListItem iconName="fas fa-user" iconText="Profile"/>
                    <HamburgerMenuListItem iconName="fas fa-heart" iconText="Favourites"/>
                </ul>
           </div>
        )
    }
};

const mapStateToProps = state => {
    return {hamburgerMenu: state.hamburgerMenu}
}

export default connect(mapStateToProps,null)(HamburgerMenu);