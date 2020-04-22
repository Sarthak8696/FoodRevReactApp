import userService from '../api/userService';
import { SIGN_IN,USER_LOGIN,USER_SIGN_UP,VENDOR_SIGN_UP,NEXT_PAGE,PREV_PAGE,TOP_FOOD_MENU ,HAM_MENU_OPEN,HAM_MENU_CLOSE} from './types';

//action creators

export const signIn = (userId) => {
    return {
        type : SIGN_IN,
        payload : userId
    }
}

export const vendorSignUpNextPage = () => {
    return {
        type : NEXT_PAGE
    }
}

export const vendorSignUpPrevPage = () => {
    return {
        type : PREV_PAGE
    }
}

export const hamburgerMenuOpen = () => {
    return {
        type : HAM_MENU_OPEN
    }
}

export const hamburgerMenuClose = () => {
    return {
        type : HAM_MENU_CLOSE
    }
}

//function returning a function using redux-thunk
export const userLogin = formValues => async dispatch => {
    const response = await userService.post('/login',formValues);
    dispatch({type: USER_LOGIN , payload: response })
};

export const userSignUp = formValues => async dispatch => {
    //const response = await userService.post('/users/signup',formValues);
    dispatch({type: USER_SIGN_UP , payload: 'response' })
};

export const vendorSignUp = formValues => async dispatch => {
    //const response = await userService.post('/users/signup',formValues);
    dispatch({type: VENDOR_SIGN_UP , payload: 'response' })
};

export const getTopRatedFood = () => async dispatch => {
    const response = await userService.get('/food-service/top-food');
    dispatch({type: TOP_FOOD_MENU , payload: response })
};
//return an action

//export the action