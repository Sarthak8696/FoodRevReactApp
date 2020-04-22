import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputBox from '../input/InputBox';
import PrimaryButton from '../buttons/PrimaryButton';
import {vendorSignUp} from '../../actions';

import {connect} from 'react-redux';

class VendorSignupVendorDetailPage extends React.Component {

    handleFormSubmit = formValues => {
        console.log("hello");
        this.props.vendorSignUp(formValues);
    }

    render() {
        return (
            <div className="vendor-signup-container">
                <div className="bg-image"/>
                <p className="vendor-signup-heading">&#123; Food_Rev &#125;</p>
                <p className="vendor-signup-subheading">Vendor Sign Up</p>
                <p className="vendor-signup-form-subheading">Vendor Details</p>
                <form onSubmit={this.props.handleClickPrev}>
                    <Field name="VendorShopName" component={InputBox} placeholder="Shop Name"/>
                    <Field name="VendorOrganisationName" component={InputBox} placeholder="Organisation name"/>
                    <PrimaryButton type="submit" buttonText="< Back"/>
                    <PrimaryButton type="button" buttonText="Submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {userServicePostRequests: state.userServicePostRequests}
}

const formWrapped = reduxForm({
    form: 'vendorWizardForm',
    destroyOnUnmount: false,    // preserve form data
    forceUnregisterOnUnmount: true, // unregister fields on unmount
  })(VendorSignupVendorDetailPage);

export default connect(mapStateToProps,{vendorSignUp})(formWrapped)