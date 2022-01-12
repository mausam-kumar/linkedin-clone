import React from 'react'
import styled from 'styled-components'
import CommanBtn from './CommanBtn'

function SectionCardTwo() {
    return (
        <Container>
            <DivLeft>
                <header>
                    Find the right job or internship for you
                </header>
            </DivLeft>
            <DivRight>
                <p>CONTENT TOPICS</p>
                <div>
                    <div>
                        <CommanBtn text="Engineering" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        <CommanBtn text="Business Development" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        <CommanBtn text="Finance" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        
                    </div>
                    <div>
                        <CommanBtn text="Administrative Assistant" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        <CommanBtn text="Sales and Retail" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>

                    </div>
                    <div>
                        <CommanBtn text="Customer Service" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        <CommanBtn text="Operations" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        <CommanBtn text="Information Technology" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                    </div>
                    <div>
                        <CommanBtn text="Marketing" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        <CommanBtn text="Human Resources" color="#00000088" hoverColor="rgba(0,0,0,0.4)" backgroundColor="rgba(0,0,0,0.2)" borderColor="transparent" hoverBorderColor="transparent"/>
                        
                    </div>
                </div>

            </DivRight>
        </Container>
    )
}

export default SectionCardTwo

const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    /* border:1px solid red; */
    padding:15px;
    font-weight:300;
    /* background-color:#FAF9F7; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 30px 0 50px 0;
`
const DivLeft = styled.div`
    width:35%;
    padding:0 5%;
    &>header{
        margin-top:20px;
        font-size:45px;
    }
`
const DivRight = styled.div`
    width:55%;
    &>div{
        
        &>div{
            margin:10px 0px;
            display:flex;
            justify-content:flex-start;
        }
    }
`