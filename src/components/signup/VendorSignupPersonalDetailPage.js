import React from 'react';
import './VendorSignupPage.scss';
import InputBox from '../input/InputBox';
import PrimaryButton from '../buttons/PrimaryButton';
import validate from '../input/validateInput';

import {Field ,reduxForm} from 'redux-form';


class VendorSignupPersonalDetailPage extends React.Component {

    render() {
        return(
            <div className="vendor-signup-container">
                <div className="bg-image"/>
                <p className="vendor-signup-heading">&#123; Food_Rev &#125;</p>
                <p className="vendor-signup-subheading">Vendor Sign Up</p>
                <p className="vendor-signup-form-subheading">Personal Details</p>
                <form onSubmit={this.props.handleClickNext}>
                    <Field component={InputBox} placeholder="Vendor Name" name="vendorSignupName" type="text"/>
                    <Field component={InputBox} placeholder="Email" name="vendorSignupEmail" type="email"/>
                    <Field component={InputBox} placeholder="Password" name="vendorSignupPassword" type="password"/>
                    <Field component={InputBox} placeholder="Confirm Password" name="vendorSignupConfirmPassword" type="password"/>
                    <Field component={InputBox} placeholder="Phone Number" name="vendorSignupPhone" type="number"/>
                    <PrimaryButton type="submit" buttonText="Next >"/>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'vendorWizardForm', 
    destroyOnUnmount: false,            //  preserve form data
    forceUnregisterOnUnmount: true,    // unregister fields on unmount
    validate
  })(VendorSignupPersonalDetailPage);