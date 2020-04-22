import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

//reducers
const userServicePostRequests = (state={},action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return action.payload;
        case 'USER_SIGN_UP':
            return action.payload;
        case 'VENDOR_SIGN_UP':
            return action.payload;
        default:
            return state;
    }
}

const vendorSignUpPageChange = (state = 1,action) => {
    if(action.type === 'NEXT_PAGE') {
        return state+1;
    }

    else if(action.type === 'PREV_PAGE') {
        return state-1;
    }

    else {
        return state;
    }
}

const hamburgerMenu = (state={ menuOpen:false },action) => {
    if(action.type === 'HAM_MENU_CLOSE') {
        return {...state, menuOpen:false};
    }

    else if(action.type === 'HAM_MENU_OPEN') {
        return {...state, menuOpen:true};
    }

    else {
        return state;
    }

}

export default combineReducers({
    //keys : reducer name
    userServicePostRequests : userServicePostRequests,
    vendorSignUpPageChange : vendorSignUpPageChange,
    hamburgerMenu : hamburgerMenu,
    form : formReducer
})