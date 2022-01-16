import * as React from 'react';
import styles from "./Navbar.module.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from './Icon';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GridOnIcon from '@mui/icons-material/GridOn';
import WorkIcon from '@mui/icons-material/Work';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function Navbar() {
    const [search, setSearch] = React.useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <Box>
            <div className={styles.Navdiv} >
                <Box style={{display:"flex", flexDirection:"row", gap:".5rem"}}>
                    <Box>
                        <LinkedInIcon />
                    </Box>
                    <div>
                        <form>
                            <input onChange={handleChange} placeholder='Search' className={styles.searchInput}/>
                        </form>
                    </div>
                </Box>

                <Box sx={{ display:"flex", flexDirection:"row", gap:1.5, marginLeft:"16%" }}>
                    <div className={styles.HomepageIcon} >
                        <div style={{margin: 0, padding:0}}>
                            <HomeIcon sx={{ fontSize: 24, marginTop:1.5 }}/>
                        </div>
                        <Typography variant="caption" sx={{ fontFamily:"Roboto", fontSize: 11.5, marginBottom:2, marginTop:-.5}}>Home</Typography>
                    </div>
                    <div className={styles.PageIcon} >
                        <div style={{margin: 0, padding:0}}>
                            <PeopleIcon sx={{ fontSize: 24, marginTop:1.5, color:"#666666" }}/>
                        </div>
                        <Typography variant="caption" sx={{ fontSize: 11.5, marginBottom:2, marginTop:-.5, color:"#666666"}}>My Network</Typography>
                    </div>
                    <div className={styles.PageIcon} >
                        <div style={{margin: 0, padding:0}}>
                            <BusinessCenterIcon sx={{ fontSize: 24, marginTop:1.5, color:"#666666" }}/>
                        </div>
                        <Typography variant="caption" sx={{ fontSize: 11.5, marginBottom:2, marginTop:-.5, color:"#666666"}}>Jobs</Typography>
                    </div>
                    <div className={styles.PageIcon} >
                        <div style={{margin: 0, padding:0}}>
                            <CommentIcon sx={{ fontSize: 24, marginTop:1.5, color:"#666666" }}/>
                        </div>
                        <Typography variant="caption" sx={{ fontSize: 11.5, marginBottom:2, marginTop:-.5, color:"#666666"}}>Messaging</Typography>
                    </div>
                    <div className={styles.PageIcon} >
                        <div style={{margin: 0, padding:0}}>
                            <NotificationsIcon sx={{ fontSize: 24, marginTop:1.5, color:"#666666" }}/>
                        </div>
                        <Typography variant="caption" sx={{ fontSize: 11.5, marginBottom:2, marginTop:-.5, color:"#666666"}}>Notifications</Typography>
                    </div>
                    <div className={styles.PageIcon} >
                        <div className={styles.IconCircle}>
                            <img width="100%" src='https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1650499200&v=beta&t=XkbVbk3QwtbS9CsGy0xvNic6hwLqZgWSIOGdkUcLXsg' />
                        </div>
                        <Typography variant="caption" sx={{ fontSize: 11.5, marginTop:.05, color:"#666666"}}>Me</Typography>
                    </div>
                    <div className={styles.PageIcon} >
                        <div style={{margin: 0, padding:0}}>
                            <GridOnIcon sx={{ fontSize: 24, marginTop:1.5, color:"#666666" }}/>
                        </div>
                        <Typography variant="caption" sx={{ fontSize: 11.5, marginBottom:2, marginTop:-.5, color:"#666666"}}>Work</Typography>
                    </div>
                    <div className={styles.PageIcon} >
                        <div style={{margin: 0, padding:0}}>
                            <WorkIcon sx={{ fontSize: 24, marginTop:1.5, color:"#666666" }}/>
                        </div>
                        <Typography variant="caption" sx={{ fontSize: 11.5, marginBottom:2, marginTop:-.5, color:"#666666"}}>Post a Job</Typography>
                    </div>
                </Box>

            </div>
        </Box>
    )

}

export default Navbar