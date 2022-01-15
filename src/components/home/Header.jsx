import React from 'react'
import styled from 'styled-components'
import CommanBtn from './CommanBtn.jsx'
import Icons from './Icons.jsx'
import {Link} from "react-router-dom"

function Header() {
    return (
        <Container>
            <Link to="/">
                <LeftDiv>
                    <img src="/images/logo.svg" alt="linkedin-logo" />
                </LeftDiv>
            </Link>
            <RightDiv>
                <IconContainer>
                    <Icons text="Discover" imageUrl="/images/compass.svg"/>
                    <Icons text="People" imageUrl="/images/people.svg"/>
                    <Link to="/main"><Icons text="Learning" imageUrl="/images/learning.svg"/></Link>
                    <Link to="/job"><Icons text="Jobs" imageUrl="/images/jobs.svg"/></Link>
                    {/* <Icons text="Jobs" imageUrl="/images/jobs.svg"/> */}
                </IconContainer>
                <ButtonContainer>
                    <Link to="register">
                        <CommanBtn text="Join Now" color="rgba(0,0,0,0.5)" hoverColor="rgba(0,0,0,0.2)" backgroundColor="transparent" borderColor="transparent" hoverBorderColor="transparent"/>
                    </Link>
                    <Link to="/login">
                        <CommanBtn text="Sign in" color="#3481ce" hoverColor="#dcedff" backgroundColor="transparent" borderColor="#0A66C2" hoverBorderColor="#033568"/>
                    </Link>
                </ButtonContainer>

            </RightDiv>
            
        </Container>
    )
}

export default Header


const Container = styled.div`
    display:flex;
    justify-content:space-around;
    height:50px;
    padding:10px 0;
`
const LeftDiv = styled.div`
    display:flex;

    &>img{
        height:100px;
        width:120px;
    }
`
const RightDiv = styled.div`
    display:flex;
`
const IconContainer = styled.div`
    display:flex;
`
const ButtonContainer = styled.div`
    display:flex;
    border-left:1px solid grey;
`