import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function HeroCard({text}) {
    return (
        <Container>
            <p>{text}</p>
            <ArrowForwardIosIcon sx={{color: 'rgb(0,0,0,0.5)'}}/>
        </Container>
    )
}

export default HeroCard

const Container = styled.div`
    display:flex;
    margin-top:10px;
    align-items:center;
    justify-content:space-between;
    padding: 2px 10px;
    cursor: pointer;
    color: rgb(0,0,0,0.7);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    transition: .3s all ease-in-out;
    border-radius:10px;
    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`