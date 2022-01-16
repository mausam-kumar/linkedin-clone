import React from 'react'
import styled from 'styled-components'
import {talkingImg,studyImg} from './Images.js'
import CommanBtn from './CommanBtn.jsx'

function SectionCardThree() {

    return (
        <Container>
            <DivLeft>
                <img src={talkingImg} alt="talking_img" />
                <header>
                    Connect with people who can help
                </header>
                <CommanBtn text="Find People you Know" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="transparent" borderColor="rgba(0,0,0,0.4)" hoverBorderColor="transparent"/>
            </DivLeft>
            <DivRight>
                <img src={studyImg} alt="studyImg" />
                <header>
                    Learn the skills you need to succeed
                </header>
            </DivRight>
        </Container>
    )
}

export default SectionCardThree

const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight:300;
    background-color:#FAF9F7;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 30px 0 50px 0;
`
const DivLeft = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    &>img{
        width:50%;
    }

    &>header{
        margin-top:20px;
        font-size:45px;
        width:70%;
        margin:20px auto;
        text-align:center;
    }
`
const DivRight = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &>img{
        width:50%;
    }

    &>header{
        margin-top:20px;
        font-size:45px;
        width:70%;
        margin:20px auto;
        text-align:center;
    }
`