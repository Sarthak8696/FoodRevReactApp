import React from 'react';
import './LoginPage.scss';
import '../../common/styles.scss';
import PrimaryButton from '../buttons/PrimaryButton';
import InputBox from '../input/InputBox';
import {userLogin} from '../../actions';
import validate from '../input/validateInput';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field ,reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';

class LoginPage extends React.Component {

    handleFormSubmit = (formValues) => {
        this.props.userLogin(formValues);
        console.log(this.props.userServicePostRequests);
        if(this.props.userServicePostRequests.status===200) {
            console.log("sda");
            this.props.history.push("/home");
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-panel">
                    <div className="login-container">
                        <p className="login-heading">FoodRev</p>
                        <p className="login-subheading">Sign in</p>
                        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)} className="login-form">
                            <Field name="email" placeholder="Email" type="email" component={InputBox}/>
                            <Field name="password" placeholder="password" type="password" component={InputBox}/>
                            <PrimaryButton type="submit" buttonText="Login"/>
                        </form>
                        <a href="/" className="login-forgot-password">Forgot Password ?</a>
                        <div className="login-sign-up-container">
                            <p className="login-sign-up-heading">Sign Up</p>
                            <Link to="/signup/user" className="login-sign-up-user">as a User</Link>
                            <p>OR</p>
                            <Link to="/signup/vendor" className="login-sign-up-vendor">as a Vendor</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {userServicePostRequests: state.userServicePostRequests}
}

const formWrapped = reduxForm({
    form: 'login',
    validate
})(LoginPage);

export default connect(mapStateToProps,{userLogin})(formWrapped)