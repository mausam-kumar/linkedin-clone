import React from 'react'
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import CommanBtn from '../home/CommanBtn.jsx'
import {Link} from 'react-router-dom'

function Register() {

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
                <p>
                    By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
                </p>
                <CommanBtn style={style.btn} text="Agree and Join" color="white" hoverColor="#0A66C2" backgroundColor="#0A66C2" borderColor="transparent" hoverBorderColor="#0A66C2"/>
                <div>
                    <p>Already on LinkedIn? </p>
                    <Link to="/login"><CommanBtn style={style.btn} text="Sign in" color="#0A66C2" hoverColor="transparent" backgroundColor="transparent" borderColor="transparent" hoverBorderColor="#0A66C2"/></Link>
                </div>
        </Container>
        </MainContainer>
    )
}

export default Register

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
    
    &>p{
        font-weight:500;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color:rgb(0,0,0,0.6);
        font-size:11px;
    }

    &>div:last-child{
        display:flex;
        align-items:center;
    }

`