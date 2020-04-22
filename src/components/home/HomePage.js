import React from 'react'
import HeaderComponent from '../header/HeaderComponent'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import FoodCard from '../foodCard/FoodCard'
import './HomePage.scss'

import {connect} from 'react-redux';
import {getTopRatedFood} from '../../actions'
class HomePage extends React.Component {

    componentDidMount() {
        //this.props.getTopRatedFood();
    }

    renderFoodCard() {
        // return this.props.topFood.map(food=>{
        //     return <FoodCard key={food.id} image={food.image} price={food.price} description={food.description} item-name={food.name} type={food.type}/>
        // })
    }

    render() {
        return(
            <React.Fragment>
                <HeaderComponent/>
                <HamburgerMenu/>
                <div className="home-container">{this.renderFoodCard()}</div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    //return {topFood: Object.values(state.foodServiceGetRequest)}
}

export default connect(mapStateToProps,{getTopRatedFood})(HomePage);