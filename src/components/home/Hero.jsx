import React from 'react'
import styled from 'styled-components'
import HeroCard from './HeroCard.jsx'
import {heroImage} from './Images.js'

function Hero() {

    return (
        <Container>
            <DivLeft>
                <header className="hero-header">
                    Welcome to your professional community
                </header>
                <div>
                    <HeroCard text="Search for a job" />
                    <HeroCard text="Find a person you know" />
                    <HeroCard text="Learn a new skill" />
                </div>
            </DivLeft>
            <DivRight>
                <img src={heroImage} alt="hero-image" />
            </DivRight>
        </Container>
    )
}

export default Hero

const Container = styled.div`
    width: 100%;
    margin-top:30px;
    display:flex;
    align-items: flex-start;
    font-family:Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
`
const DivLeft = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
    /* border:1px solid red; */
    
    &>header{
        width: 60%;
        font-size:35px;
        
        color:#8F5849;
    }

    &>div{
        width:60%;
        margin:10px 0;
    }

`
const DivRight = styled.div`
    width:50%;

    &>img{
        width:100%;
        transform: scale(0.95);
        
    }
`