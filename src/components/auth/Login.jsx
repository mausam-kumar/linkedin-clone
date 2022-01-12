import React from 'react'
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import CommanBtn from '../home/CommanBtn.jsx'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {actionTypes} from '../../redux/actionTypes.js'
import {userLogin} from '../../redux/action.js'
import {useNavigate} from 'react-router-dom'

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    function handleLogin(){
        userLogin(state)
        navigate("/")
        console.log("running...")
    }

    const style = {
        input:{

            width: "100%",
        },
        btn:{
            width: "100%",
            textAlign:"center",

        }
    }
    return (
        <MainContainer>
            <Link to="/">

                <img src="/images/logo.svg" alt="" />
            </Link>
            <Container>
                <header>
                    Sign in
                </header>
                <p>Stay updated on your professional world</p>
                <TextField
                    sx={style.input}
                    helperText="Please enter your Email or Mobile"
                    id="demo-helper-text-misaligned"
                    label="Email or Phone"
                    name="email"
                    value={state.email}
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    sx={style.input}
                    helperText="Please enter your Password"
                    id="demo-helper-text-misaligned"
                    type="password"
                    label="Password"
                    name="password"
                    value={state.password}
                    onChange={(e) => handleChange(e)}
                />
                <pre>
                    Forgot password?
                </pre>
                <CommanBtn handleClick={handleLogin} style={style.btn} text="Sign in" color="white" hoverColor="#0A66C2" backgroundColor="#0A66C2" borderColor="transparent" hoverBorderColor="#0A66C2"/>
                <div>
                    <p>New to Linkedin</p>
                    <Link to="/register"><CommanBtn style={style.btn} text="Join Now" color="#0A66C2" hoverColor="transparent" backgroundColor="transparent" borderColor="transparent" hoverBorderColor="#0A66C2"/></Link>
                </div>
        </Container>
        </MainContainer>
    )
}

export default Login

const MainContainer = styled.div`

    img{
        height:40px;
        width:150px;
    }
`

const Container = styled.div`
    width: 25%;
    padding:3%;
    position: absolute;
    top:50%;
    left:50%;
    /* border: 1px solid red; */
    transform: translate(-50%, -50%) !important;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    &>header{
        font-size:32px;
    }
    
    &>pre{
        font-weight:600;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color:#0A66C2;
        font-size:16px;
    }

    &>div:last-child{
        display:flex;
        align-items:center;
    }

`