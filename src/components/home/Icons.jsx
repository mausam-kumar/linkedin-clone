import React from 'react'
import styled from 'styled-components'

function Icons({text,imageUrl}) {
    return (
        <div>
            <Figure>
                <img src={imageUrl} alt={text} />
                <figcaption>{text}</figcaption>
            </Figure>
        </div>
    )
}

export default Icons

const Figure = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:0 10px;
    cursor: pointer;
    color:rgba(0,0,0,0.6);
    transition: .3s all ease-in-out;
    height:50px;
    width:50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    &>img{
        height:18px;
        width:18px;
        /* &:hover{
            fill:rgba(0,0,0,0.9);
        } */
    }
    &>figcaption{
        margin-top:3px;
        &:hover{
            color:rgba(0,0,0,0.9);
        }
    }
`