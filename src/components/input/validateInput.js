const validate = (formValues) => {
    const errors={}
    
    if(!formValues.loginEmail) {
        errors.loginEmail = 'Please enter a valid email';
    }

    if(!formValues.loginPassword) {
        errors.loginPassword = 'Please enter a password';
    }

    return errors;
}

export default validate;