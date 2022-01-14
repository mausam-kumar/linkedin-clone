import axios from 'axios'
import JobItems from './JobItems';
import styles from "./Jobs.module.css";
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
    const classes = useStyles();

    useEffect(()=>{
        axios.get("http://localhost:3000/jobs")
        .then(res => {
            const dataItem = res.data;
            setData(dataItem);
          })
          .catch(error=>console.log(error))
    },[])
    console.log("print",data)

    return (
        <div style={{"width":"100%", "margin": "0px", "padding": "0px", "justifyContent":"center", "background":"rgb(243,242,239)", "display":"flex"}}>
            <Container style={{"width":"100%", "padding": "0px", "justifyContent":"center", "background":"rgb(243,242,239)", "display":"flex", "gap":"2rem"}}>
                <Box sx={{width:"22%", mt:"1rem", position:"sticky", top:"1.5rem", height:"600px"}}>
                    <Box sx={{width:'90%', height:"500px", p:1, border:'1px solid gray', borderRadius:'5px', background:"white"}} className={classes.buttonBox}>
                        <Button color="inherit" startIcon={<BookmarkIcon/>}>My Jobs</Button>
                        <Button color="inherit" startIcon={<NotificationsIcon />}>Job Alerts</Button>
                        <Button color="inherit" startIcon={<CurrencyRupeeIcon />}>Salary</Button>
                        <Button color="inherit" startIcon={<AssignmentTurnedInIcon />}>Skill Assessments</Button>
                        <Button color="inherit" startIcon={<StickyNote2Icon />}>Interview Prep</Button>
                        <Button color="inherit" startIcon={<SummarizeIcon />}>Resume Builder</Button>
                        <Button color="inherit" startIcon={<OndemandVideoIcon />}>Job Seeker Guidance</Button>
                        <Button color="inherit" startIcon={<SettingsIcon />}>Application Settings</Button>
                    </Box>
                    <button className={styles.postJobBtn}><IconButton color="primary" >
                        <LaunchIcon /></IconButton>Post a free job</button>
                    {/* <i class="fas fa-edit"></i> */}
                </Box>
                <Box sx={{width:'50%',mt:"1rem", p:1, border:'1px solid gray', borderRadius:'5px', background:"white"}}>
                    <Box>
                        <h1>Recommended for you</h1>
                        <p style={{"fontSize":"18px"}}>Based on your profile and search history</p>
                    </Box>
                    <Box>
                        {data.map((item, i) => <JobItems data={item} key={i}/>)}
                    </Box>
                </Box>
                <Box sx={{width:'25%',mt:"1rem", height:"300px", p:1, border:'1px solid gray', borderRadius:'5px', background:"white"}}>
                    <h2>Job seeker guidance</h2>
                    <p>Recommended based on your activity</p>
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={6} sx={{mt:"30px", fontWeight:"bold"}}>
                            <ButtonBase >
                                <Typography sx={{textDecoration:"underline"}}>I want to improve my resume</Typography>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={2}>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt="complex" src="https://www.linkedin.com/dms/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQIIvJky0zu2gwAAAX5S0MCNqmQhGyC43nE9ui2cbdZoRcRgevagq01R9g&e=1642153319&v=beta&t=yVmTWwdELE4VPUZeZW7y5ZiKCrkd6rjtPPk7KYFmPvE" />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                    <Button color="inherit" endIcon={<ArrowForwardIcon/>}>Show more</Button>
                </Box>
            </Container>

        </div>
    )
}