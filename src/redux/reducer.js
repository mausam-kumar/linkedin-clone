import {actionTypes} from './actionTypes.js'

const initState = {
    auth:{
        isError:false,
        isSuccess:false,
        isLoading:false

    },
    register:{
        isError:false,
        isSuccess:false,
        isLoading:false
    }
}

export const reducer = (state=initState,action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_ERROR:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    isError:true
                }
            }
        case actionTypes.USER_LOGIN_REQUEST:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    isLoading:true
                }
            }
        case actionTypes.USER_LOGIN_SUCCESS:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    isError:false,
                    isSuccess:true
                }
            }
        case actionTypes.USER_REGISTER_ERROR:
            return{
                ...state,
                register:{
                    ...state.register,
                    isError:false,
                    isSuccess:true
                }
            }
        case actionTypes.USER_REGISTER_SUCCESS:
            return{
                ...state,
                register:{
                    ...state.register,
                    isError:false,
                    isSuccess:true
                }
            }
        case actionTypes.USER_REGISTER_REQUEST:
            return{
                ...state,
                register:{
                    ...state.register,
                    isError:false,
                    isSuccess:true
                }
            }
    
        default:
            return state;
    }
}