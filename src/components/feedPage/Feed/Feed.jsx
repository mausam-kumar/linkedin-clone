import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import styles from "./Feed.module.css"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ProfileDiv from "./ProfileDiv";
import { useEffect, useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NewsDiv from "./NewsDiv";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "./api";
import FeedPost from "./FeedPost";
import FooterSection from '../../home/FooterSection'

function Feed() {
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState("");

    const {posts, isLoading, isError} = useSelector(
        state => state.posts,
        shallowEqual
    )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    } ,[])
    
    const handleSearchClick = () => {
        setModal(true);
    }

    const handleStatusChange = (e) => {
        // console.log(e.target.value)
        setStatus(e.target.value);
    }

    const handleStatusClick = () => {

        const icon = "https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1650499200&v=beta&t=XkbVbk3QwtbS9CsGy0xvNic6hwLqZgWSIOGdkUcLXsg";
        const name = "Masai School";
        const bio = "21,385 Followers";
        const time = "Just now";
        const like = "";
        const comments = "";

        console.log(status)

        dispatch(addPosts(icon, name, bio, time, status, like, comments)).then((res) => {
            dispatch(getPosts());
        });

        setStatus("")
        setModal(false);
    }

    return (
        <div>

       
        <div className={styles.MainDiv}>

            <Modal className={styles.Modal} open={modal} onClose={() => setModal(false)}>
                <Paper className={styles.Paper}>
                    <div className={styles.ModalHeadDiv}>
                        <Typography variant="h6">Create a post</Typography>
                        <button onClick={() => setModal(false)}>
                            <Typography variant="h6">X</Typography>
                        </button>
                    </div>

                    <div className={styles.ModalInputDiv}>

                        <div style={{ display: "flex", flexDirection: "row", gap: "10px", padding: "5px 4%" }}>
                            <div style={{ borderRadius: "50%", width: "46px", height: "46px", border: "0.5px solid #EBEBEB", overflow: "hidden" }}>
                                <img width="100%" src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1650499200&v=beta&t=XkbVbk3QwtbS9CsGy0xvNic6hwLqZgWSIOGdkUcLXsg" />
                            </div>
                            <div className={styles.PostingDiv}>
                                <li-icon aria-hidden="true" type="person-icon" class="share-state-change-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#666666" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M5 4a3 3 0 113 3 3 3 0 01-3-3zm3.75 4h-1.5A2.25 2.25 0 005 10.25V15h6v-4.75A2.25 2.25 0 008.75 8z"></path>
                                </svg></li-icon>
                                <Typography sx={{ fontWeight: "bolder", margin: "2px 5px 4px 5px", fontSize: "14px" }}>Masai School</Typography>
                            </div>
                            <div className={styles.PostingDiv}>
                                <li-icon aria-hidden="true" type="globe-icon" class="share-state-change-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                </svg></li-icon>
                                <Typography sx={{ fontWeight: "bolder", margin: "2px 5px 4px 5px", fontSize: "14px" }}>Anyone</Typography>
                            </div>
                        </div>

                        <textarea onChange={handleStatusChange} className={styles.StatusInput} type="text" placeholder="What do you want to talk about?" name="Status" />
                    
                    </div>

                    <div className={styles.StatusInputIcons}>
                        <button className={styles.UploadIcon}>
                            <li-icon aria-hidden="true" type="image-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                            </svg></li-icon>
                        </button>
                        <button className={styles.UploadIcon}>
                            <li-icon aria-hidden="true" type="video-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                            </svg></li-icon>
                        </button>
                        <button className={styles.UploadIcon}>
                            <li-icon aria-hidden="true" type="sticky-note-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                            </svg></li-icon>
                        </button>
                        <button className={styles.UploadIcon}>
                            <li-icon aria-hidden="true" type="briefcase-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                            </svg></li-icon>
                        </button>
                        <button className={styles.UploadIcon}>
                            <li-icon aria-hidden="true" type="starburst-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                            </svg></li-icon>
                        </button>
                        <button className={styles.UploadIcon}>
                            <li-icon aria-hidden="true" type="analytics-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                            </svg></li-icon>
                        </button>
                        <button className={styles.UploadIcon}>
                            <li-icon aria-hidden="true" type="ellipsis-horizontal-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                            </svg></li-icon>
                        </button>

                        {status === "" ? (
                            <button disabled className={styles.PostButton}>
                            Post
                        </button>
                        ) : (
                            <button onClick={handleStatusClick} className={styles.PostButton}>
                                Post
                            </button>
                        )}

                    </div>
                </Paper>
            </Modal>

            <ProfileDiv />

            <div className={styles.MainFeed}>

                <div className={styles.StatusBox}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                        <div style={{ borderRadius: "50%", width: "44px", height: "44px", border: "border: #666666 .5px solid", overflow: "hidden" }}>
                            <img width="100%" src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1650499200&v=beta&t=XkbVbk3QwtbS9CsGy0xvNic6hwLqZgWSIOGdkUcLXsg" />
                        </div>
                        <div>
                            <button onClick={handleSearchClick} className={styles.SearchButton}>Start a post</button>
                        </div>
                    </div>
                    <div className={styles.AttachmentsDiv}>
                        <button className={styles.AttachButton}>
                            <li-icon aria-hidden="true" type="image-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#70B5F9" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                            </svg></li-icon>
                            <p>Photo</p>
                        </button>
                        <button className={styles.AttachButton}>
                            <li-icon aria-hidden="true" type="video-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#7FC15E" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                            </svg></li-icon>
                            <p>Video</p>
                        </button>
                        <button className={styles.AttachButton}>
                            <li-icon aria-hidden="true" type="calendar-icon" size="medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#E7A33E" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                            </svg></li-icon>
                            <p>Event</p>
                        </button>
                        <button className={styles.AttachButton}>
                            <li-icon aria-hidden="true" type="content-left-align-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#FC9295" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                            </svg></li-icon>
                            <p>Write article</p>
                        </button>
                    </div>
                </div>

                <div className={styles.FeedPostsDiv}>
                    {posts.map((post) => (
                        <FeedPost key={post.id} {...post}/>
                    ))}
                </div>

            </div>

            <NewsDiv/>
            </div>
            <FooterSection />
        </div>
    )
}

export default Feed