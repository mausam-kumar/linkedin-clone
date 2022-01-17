import "../../styles.css";
import styles from "./MainHeader.module.css";
import React from 'react'
import styled from 'styled-components'
import HeaderIcons from './HeaderIcons.jsx'
import {Link} from "react-router-dom";
import linkedinLogo from './images/linkedin.png';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

const RightDiv = styled.div`
    float:left;
    padding-top:3px;
    width:50%;
    display:flex;
`
const IconContainer = styled.div`
    float:left:
    width:90%;
    display:flex;
` 
const ButtonContainer = styled.div`
    display:flex;
    float:left;
    border-left:1px solid grey;
`   
const Profile = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    color:rgba(0,0,0,0.6);
    transition: .3s all ease-in-out;
    height:50px;
    width:70px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    &>figcaption{
        margin-top:2px;
        font-size:15px;
        &:hover{
            color:rgba(0,0,0,0.9);
        }
    }
`
export default function Header({searchLoc}) {
  const [loc, setLoc] = React.useState("");

  const handleChange = (e) => {
    setLoc(e.target.value);
  }

  const handleSearch = () => {
    searchLoc(loc);
  }

  return (
    <div style={{ height: "60px", position:"fixed", background:"white", width:"100%", zIndex:5}}>
      <div className={styles.headerCont}>
        <div style={{ float: "left", height: "100%" }}>
          <Link to="/"><img
            height="60px"
            src={linkedinLogo}
            alt="linkedin"
          /></Link>
        </div>
        <div
          style={{
            float: "left",
            paddingTop: "0.5rem",
            width: "30%",
          }}
        >
          <input type="text" placeholder="Search" className={styles.searchBar}/>
        </div>
        <div
          style={{
            float: "left",
            paddingTop: "0.5rem",
            width: "30%",
            marginLeft:"1.5rem"
          }}
        >
          <input type="text" placeholder="City, state, or zip code" value={loc} onChange={handleChange} className={styles.searchBar}/>
        </div>
        <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
      </div>
      <RightDiv>
                <IconContainer>
                    <HeaderIcons text="Home" imageUrl="/images/home.svg"/>
                    <HeaderIcons text="My Network" imageUrl="/images/people.svg"/>
                    <Link to="/job"><HeaderIcons text="Jobs" imageUrl="/images/jobs.svg"/></Link>
                    <HeaderIcons text="Messaging" imageUrl="/images/message.png"/>
                    <HeaderIcons text="Notifications" imageUrl="/images/notification.png"/>
                    {/* <Icons text="Jobs" imageUrl="/images/jobs.svg"/> */}
                    <Profile>
                        <Avatar alt="me" src="/images/me.jpg" style={{height:"25px", width:"25px"}}/>
                        <figcaption>Me</figcaption>
                    </Profile>
                </IconContainer>

                <ButtonContainer>
                <Profile>
                        <img alt="menu" src="/images/menu.png" style={{height:"25px", width:"25px"}}/>
                        <figcaption>Work</figcaption>
                    </Profile>
                    <div style={{ padding:"1rem", color:"rgb(190, 88, 4)"}}><p style={{textAlign:"center"}}>Try Premium for free</p></div>
                </ButtonContainer>
     </RightDiv>
    </div>
  );
}
