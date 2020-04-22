import React from 'react';
import './HamburgerMenuListItem.scss';
import { connect } from 'react-redux';

class HamburgerMenuListItem extends React.Component {

    render() {
        return (
            <li className="menu-list-items">
                {/* <Icon className={this.props.iconName} />{this.props.iconText}<Icon className="angle right" /> */}
                <i class={this.props.iconName}></i>{this.props.iconText}<i class="fas fa-angle-right"></i>
            </li>
        )
    }
};

const mapStateToProps = state => {
    return { hamburgerMenuListItem: state.hamburgerMenuListItem }
}

export default connect(mapStateToProps, null)(HamburgerMenuListItem);