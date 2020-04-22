import React from 'react';
import './UserSignupPage.scss';
import InputBox from '../input/InputBox';
import PrimaryButton from '../buttons/PrimaryButton';
import {userSignUp} from '../../actions';
import validate from '../input/validateInput';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field ,reduxForm} from 'redux-form';

class UserSignUpPage extends React.Component {

    handleFormSubmit = (formValues) => {
        this.props.userSignUp(formValues);
    }

    render() {
        return(
            <div className="user-signup-container">
                <div className="bg-image"/>
                <p className="user-signup-heading">&#123; Food_Rev &#125;</p>
                <p className="user-signup-subheading">User Sign Up</p>
                <form onSubmit={this.handleFormSubmit} className="user-signup-form">
                    <Field name="userSignupName" placeholder="Name" type="text" component={InputBox}/>
                    <Field name="userSignupEmail" placeholder="Email" type="email" component={InputBox}/>
                    <Field name="userSignupPassword" placeholder="Password" type="password" component={InputBox}/>
                    <Field name="userSignupConfirmPassword" placeholder="Confirm Password" type="password" component={InputBox}/>
                    <Field name="userSignupPhone" placeholder="Phone number" type="number" component={InputBox}/>
                    <PrimaryButton type="submit" buttonText="Sign Up"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {userServicePostRequests: state.userServicePostRequests}
}

const formWrapped = reduxForm({
    form: 'userSignup',
    validate
})(UserSignUpPage);

export default connect(mapStateToProps,{userSignUp})(formWrapped)