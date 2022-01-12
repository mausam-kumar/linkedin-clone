import React from 'react'
import TextField from '@mui/material/TextField';
import style from './Landing.module.css'

function Login() {

    const [state,setState] = React.useState({
        email:"",
        password:""
    })

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <TextField
                className={style.textField}
                helperText="Please enter your Email or Mobile"
                id="demo-helper-text-misaligned"
                label="Enter Email or Mobile"
                name="email"
                value={state.email}
                onChange={(e) => handleChange(e)}
            />
            <TextField
                className={style.textField}
                helperText="Please enter your Password"
                id="demo-helper-text-misaligned"
                type="password"
                label="Password"
                name="password"
                value={state.password}
                onChange={(e) => handleChange(e)}
            />
    </div>
    )
}

export default Login
