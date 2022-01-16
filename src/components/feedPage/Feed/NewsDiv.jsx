import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import styles from "./Feed.module.css"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ProfileDiv from "./ProfileDiv";
import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function NewsDiv(){
    return (
        <div className={styles.News}>
                <div>
                    <p style={{fontWeight:"bold", margin:"12px 20px", fontSize:"15px"}}>LinkedIn News</p>
                </div>
                <div className={styles.NewsDiv}>
                    <p style={{fontSize:"13px", fontWeight:"bold"}}>Get job ready with Jobs Bootcamp</p>
                    <div className={styles.NewsInfoDiv}>
                        <p>Top News</p>
                        <p>17,482 readers</p>
                    </div>
                </div>
                <div className={styles.NewsDiv}>
                    <p style={{fontSize:"13px", fontWeight:"bold"}}>What Gen-z needs at a workplace</p>
                    <div className={styles.NewsInfoDiv}>
                        <p>1d ago</p>
                        <p>4,482 readers</p>
                    </div>
                </div>
                <div className={styles.NewsDiv}>
                    <p style={{fontSize:"13px", fontWeight:"bold"}}>Omicron wave hits travel industry</p>
                    <div className={styles.NewsInfoDiv}>
                        <p>3d ago</p>
                        <p>6,383 readers</p>
                    </div>
                </div>
                <div className={styles.NewsDiv}>
                    <p style={{fontSize:"13px", fontWeight:"bold"}}>Facebook staff faces booster mandate</p>
                    <div className={styles.NewsInfoDiv}>
                        <p>4d ago</p>
                        <p>4,838 readers</p>
                    </div>
                </div>
                <div className={styles.NewsDiv}>
                    <p style={{fontSize:"13px", fontWeight:"bold"}}>Coronavirus: India updates</p>
                    <div className={styles.NewsInfoDiv}>
                        <p>4d ago</p>
                        <p>8,383 readers</p>
                    </div>
                </div>
                <div className={styles.NewsDiv}>
                    <p style={{fontSize:"13px", fontWeight:"bold"}}>HR Policies get creative at startups</p>
                    <div className={styles.NewsInfoDiv}>
                        <p>5d ago</p>
                        <p>8,284 readers</p>
                    </div>
                </div>
            </div>
    )
}