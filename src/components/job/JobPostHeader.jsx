import linkedinLogo from './images/linkedin.png';
import Avatar from '@mui/material/Avatar';
import styles from './JobPostHeader.module.css';
import "../../styles.css";
import {Link} from "react-router-dom"

export default function JobPostHeader(){
    return (
        <div style={{ "height":"60px", position:"fixed", width:"100%", background:"white", zIndex:5}}>
            <div style={{"width":"50px", "marginLeft":"200px", "float":"left"}}>
                <Link to="/"><img height="60px" src={linkedinLogo} alt="linkedin" /></Link>
            </div>
            <div style={{"float":"right", "margin":"13px 10%", "width":"300px","display":"flex", "fontSize":"20px"}}>
                <p style={{"margin":"5px 10px"}}>Manage Job Posts</p>
                <Avatar alt="Remy Sharp" src="/images/me.jpg" />
            </div>
        </div>
    )
}