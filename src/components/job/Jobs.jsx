import axios from 'axios'
import JobItems from './JobItems';
import styles from "./Jobs.module.css";
import MainHeader from "./MainHeader.jsx";
import Footer from "./Footer.jsx";
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SummarizeIcon from '@mui/icons-material/Summarize';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import resume from './images/resume.gif';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root:{
        height: '100%',
        overflow: 'hidden',
        width: '100%',
        display:"flex"
    },
    buttonBox: {
        width:"90%",
        fontSize: "3rem",
        textAlign: "left",
        
    },
    // buttonIcon: {
    //     // padding:"1.5rem", 
    //     // backgroundColor:"pink"
    // }

        // root:{
        //     height: '100%',
        //     overflow: 'hidden',
        //     width: '100%',
        //     m:0, 
        //     p:0, 
        //     justifyContent:"center", 
        //     background:"rgb(243,242,239)", 
        //     display:"flex"
        // },
    })

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
    

export default function Jobs(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    const searchForLocation = (loc) => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/jobs?location_like=${loc}`)
        .then(res => {
            const dataItem = res.data.reverse();
            setData(dataItem);
            setIsLoading(false);
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/jobs")
        .then(res => {
            // console.log("data=", res)
            const dataItem = res.data.reverse();
            setData(dataItem);
            setIsLoading(false);
          })
          .catch(error=>console.log(error))
    },[])
    // console.log("print",data)

    return (
        <>
            <MainHeader searchLoc={searchForLocation}/>
            <div style={{"width":"100%", "margin": "0px", "paddingTop": "70px", "justifyContent":"center", "background":"rgb(243,242,239)", "display":"flex"}}>
                <Container style={{"width":"100%", "padding": "0px", "justifyContent":"center", "background":"rgb(243,242,239)", "display":"flex"}}>
                    <Box sx={{width:"23%", mt:"1rem", position:"sticky", top:"4.5rem", height:"600px"}}>
                        <Box sx={{width:'92%', height:"500px", paddingLeft:"1rem", border:'1px solid rgb(224,223,220)', borderRadius:'10px', background:"white"}}>
                            <Button style={{"margin":"1rem 0 1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<BookmarkIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>My Jobs</Button>
                            <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<NotificationsIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Job Alerts</Button>
                            <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<CurrencyRupeeIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Salary</Button>
                            <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<AssignmentTurnedInIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Skill Assessments</Button>
                            <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<StickyNote2Icon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Interview Prep</Button>
                            <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<SummarizeIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Resume Builder</Button>
                            <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<OndemandVideoIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Job Seeker Guidance</Button>
                            <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<SettingsIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Application Settings</Button>
                        </Box>
                        <button className={styles.postJobBtn}><Link to="/header"><IconButton color="primary" >
                            <LaunchIcon /></IconButton>Post a free job</Link></button>
                        {/* <i class="fas fa-edit"></i> */}
                    </Box>
                    <Box sx={{width:'50%',margin:"1rem 0 0 1rem", padding:"1rem 2rem", border:'1px solid rgb(224,223,220)', borderRadius:'10px', background:"white"}}>
                        <Box>
                            <h1 style={{"fontSize":"21px", "color":"rgb(25,25,25)", "marginBottom":0, color:"rgb(84,84,84)"}}>Recommended for you</h1>
                            <p style={{"fontSize":"18px", "margin":0, color:"rgb(84,84,84)"}}>Based on your profile and search history</p>
                        </Box>
                        <Box style={{"marginTop":"1rem"}}>
                            {isLoading? (<div className={styles.loading}>Loading...</div>) : data.map((item, i) => <JobItems data={item} key={i}/>)}
                        </Box>
                    </Box>
                    <Box sx={{width:"30%", margin:"1rem 0 0 1rem"}}>
                        <Box sx={{width:'100%', height:"210px", padding:"1rem", border:'1px solid rgb(224,223,220)', borderRadius:'10px', background:"white"}}>
                            <h2 style={{"fontSize":"21px", "color":"rgb(25,25,25)", "marginBottom":0, color:"rgb(84,84,84)"}}>Job seeker guidance</h2>
                            <p style={{"fontSize":"18px", "margin":0, color:"rgb(84,84,84)"}}>Recommended based on your activity</p>
                            <Grid container direction="row" spacing={1} style={{ "margin": "10px 0 5px"}} className={styles.jobGuidance}>
                                <Grid item xs={6} style={{"marginTop":"10px"}}>
                                    <ButtonBase >
                                        <Typography style={{"textAlign":"left", "fontWeight":"bold", "fontSize":"18px", color:"rgb(84,84,84)"}}>I want to improve my resume</Typography>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={2}>
                                    <ButtonBase sx={{ width: 128, height: 75 }}>
                                        <Img alt="complex" src={resume} />
                                    </ButtonBase>
                                </Grid>
                            </Grid>
                            <Button style={{"fontSize":"19px",color:"rgb(84,84,84)","textTransform": "initial"}} className={styles.jobGuidanceMore} endIcon={<ArrowForwardIcon/>}>Show more</Button>
                        </Box>
                        <Box style={{position:"sticky", top:"4.5rem"}}>
                            <Footer/>
                        </Box>
                    </Box>
                </Container>

            </div>
        </>
    )
}