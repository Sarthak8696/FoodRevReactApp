import React from 'react';
import UserRegistrationPage from './signup/UserSignupPage';
import WizardForm from '../components/signup/WizardForm';
import LoginPage from '../components/login/LoginPage';
import HomePage from '../components/home/HomePage';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/signup/user" component={UserRegistrationPage}/>
            <Route path="/signup/vendor" component={WizardForm}/>
        </BrowserRouter>
    )
}

export default App;