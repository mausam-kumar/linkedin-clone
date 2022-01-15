import React from 'react'
import styled from 'styled-components'

function HeaderIcons({text,imageUrl}) {
    return (
        <div>
            <Figure>
                <img src={imageUrl} alt={text} />
                <figcaption>{text}</figcaption>
            </Figure>
        </div>
    )
}

export default HeaderIcons

const Figure = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    cursor: pointer;
    color:rgba(0,0,0,0.6);
    transition: .3s all ease-in-out;
    height:50px;
    width:90px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    &>img{
        height:25px;
        width:25px;
        &:hover{
            fill:rgba(0,0,0,0.9);

        }
    }
    &>figcaption{
        margin-top:3px;
        font-size:15px;
        &:hover{
            color:rgba(0,0,0,0.9);
        }
    }
`