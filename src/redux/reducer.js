import {actionTypes} from './actionTypes.js'

const initState = {
    auth:{
        isError:false,
        isSuccess:false
    },
    register:{
        isError:false,
        isSuccess:false
    }
}

export const reducer = (state=initState,action) => {
    switch (action.type) {
        
    
        default:
            return state;
    }
}