import React from 'react';
import {vendorSignUpNextPage} from '../../actions';
import {vendorSignUpPrevPage} from '../../actions';

import {connect} from 'react-redux';
import VendorSignupPersonalDetailPage from './VendorSignupPersonalDetailPage';
import VendorSignupVendorDetailPage from './VendorSignupVendorDetailPage';

class WizardForm extends React.Component {

    nextPage=()=> {
        this.props.vendorSignUpNextPage();
    }

    prevPage=()=> {
        this.props.vendorSignUpPrevPage();
    }

    render() {
        return (
            <div>
                {this.props.vendorSignUpPageChange===1 && <VendorSignupPersonalDetailPage handleClickNext={this.nextPage}/>}
                {this.props.vendorSignUpPageChange===2 && <VendorSignupVendorDetailPage handleClickPrev={this.prevPage}/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {vendorSignUpPageChange: state.vendorSignUpPageChange}
}

export default connect(mapStateToProps,{vendorSignUpNextPage,vendorSignUpPrevPage})(WizardForm);