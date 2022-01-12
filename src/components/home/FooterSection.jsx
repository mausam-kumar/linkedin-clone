import React from 'react'
import styled from 'styled-components'


function FooterSection() {
    return (
        <Container>
            <img src="/images/imageTwo.png" alt="imageTwo" />
            <img src="/images/imageOne.png" alt="imageTwo" />
            <footer>
                <div>
                    <img src="/images/logo.svg" alt="linkedin-logo" />
                </div>
                <div>
                    <header>
                        General
                    </header>
                    
                        <span>Sign Up</span>
                        <span>Help Center</span>
                        <span>About</span>
                        <span>Press</span>
                        <span>Blog</span>
                        <span>Careers</span>
                        <span>Developers</span>
                    
                </div>
                <div>
                    <header>
                        Browse LinkedIn
                    </header>
                    
                        <span>Learning</span>
                        <span>Jobs</span>
                        <span>Salary</span>
                        <span>Mobile</span>
                        <span>Services</span>
                        <span>Products</span>
                    
                </div>
                <div>
                    <header>
                        Business Solutions
                    </header>
                    

                        <span>Talent</span>
                        <span>Marketing</span>
                        <span>Sales</span>
                        <span>Learning</span>
                    
                </div>
                <div>
                    <header>
                        Directories
                    </header>
                    
                        <span>Members</span>
                        <span>Jobs</span>
                        <span>Companies</span>
                        <span>Salaries</span>
                        <span>Featured</span>
                        <span>Learning</span>
                        <span>Posts</span>
                        <span>Articles</span>
                        <span>Schools</span>
                        <span>News</span>
                        <span>News Letters</span>
                        <span>Services</span>
                        <span>Interview Prep</span>
                        <span>Products</span>
                        <span>Content Topics</span>
                    
                </div>
            </footer>
        </Container>
    )
}

export default FooterSection

const Container = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    &>footer{
        display:flex;
        justify-content:space-around;
        margin-top:20px;
        
        &>div{

            &>img{
                height:50px;
                width:150px;
            }

            display:flex;
            flex-direction: column;
            justify-content:flex-start;
            align-items:flex-start;
            /* border:1px solid red; */

            &>header{
                text-align:center;
                font-weight:600;
                font-size:18px;
            }
            &>span{
                margin-top:5px;
                font-weight: 500;
                color:rgb(0,0,0,0.5);
                font-size:13px;
            }
            
        }
    }

    &>img{
        width: 100%;
    }
`