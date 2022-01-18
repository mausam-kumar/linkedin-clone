import {actionTypes} from './actionTypes.js'
import axios from 'axios'

export const userRegister = (data) => async (dispatch,getState) =>{
    dispatch({
        type:actionTypes.USER_REGISTER_REQUEST
    })

    try {
        const dataPayload = {
            name: "MASAI School",
            email: `${data.email}`,
            password: `${data.password}`,
            username: `${data.email}`,
            mobile: "9876543210",
            description: "A Transformation in education!" 
          }

        const payload = {
            url:`http://localhost:3001/auth/register`,
            method: "POST",
            data:dataPayload
        }
        await axios(payload)
        dispatch({
            type:actionTypes.USER_REGISTER_SUCCESS
        })
    } catch (error) {
        dispatch(actionTypes.USER_REGISTER_ERROR)
    }

} 

export const userLogin = ({email,password}) => async (dispatch,getState) => {
    dispatch({
        type:actionTypes.USER_LOGIN_REQUEST
    })

    try {
        const dataPayload = {
            username:email,
            password
        }
        const payload = {
            url:`http://localhost:3001/auth/login`,
            method: "POST",
            data:dataPayload
        }

        const {data} = await axios(payload)
        console.log("data...")
        dispatch({
            type:actionTypes.USER_LOGIN_SUCCESS
        })
    } catch (error) {
        dispatch({
            type:actionTypes.USER_LOGIN_ERROR
        })
    }
}