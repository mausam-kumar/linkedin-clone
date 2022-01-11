import React from 'react'
import styled from 'styled-components'

function CommanBtn({text,backgroundColor,borderColor,hoverColor,color,hoverBorderColor}) {

    return (
        <div>
            <Button color={color} 
            backgroundColor={backgroundColor} 
            hoverColor={hoverColor} 
            borderColor={borderColor}
            hoverBorderColor={hoverBorderColor}
            >{text}</Button>
        </div>
    )
}

export default CommanBtn

const Button = styled.button`
    font-weight: 600;
    font-size:15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    transition: .3s all ease-in-out;

    border-radius: 28px;
    padding: 8px 20px;
    margin: 0 10px;
    border:1px solid ${props => props.borderColor};

    &:hover{
        outline: none;
        border: 1px solid ${props => props.hoverBorderColor};
        background-color: ${props => props.hoverColor};
    }
`