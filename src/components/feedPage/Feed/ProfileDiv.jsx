import { Box, Typography } from "@mui/material";
import styles from "./Feed.module.css"
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function ProfileDiv(){
    return(
        <div className={styles.Profile}>
                <div style={{ backgroundColor: "black", width: "100%", height: "45px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}>
                    <div style={{ borderRadius: "50%", width: "80px", height: "80px", border: "border: white 2px solid;", overflow: "hidden", margin: "20px auto" }}>
                            <img width="100%" src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1650499200&v=beta&t=XkbVbk3QwtbS9CsGy0xvNic6hwLqZgWSIOGdkUcLXsg" />
                    </div>
                </div>

                <div style={{ width: "100%", height: "90px", borderBottom: "0.5px solid #EBEBEB", padding: "30% 2% 1% 2%" }}>
                    <div>
                        <Typography className={styles.ProfileName} sx={{ fontSize: 14, fontWeight: "bold", color: "#303030", cursor:"pointer" }}>Masai School</Typography>
                        <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#666666" }}>Driven by Outcomes, Fuelled by Ambitions.</Typography>
                    </div>
                </div>

                <div style={{ width: "100%", height: "70px", borderBottom: "0.5px solid #EBEBEB", display: "flex", flexDirection: "column", padding: "1% 0% 1% 0%", justifyContent: "center", gap: "10px" }}>
                    <div className={styles.ViewsDiv}>
                        <Typography sx={{ fontSize: 11, color: "#717171", fontWeight: "bold" }}>Who viewed your profile</Typography>
                        <Typography sx={{ fontSize: 12, color: "#1D72C7", fontWeight: "bold" }}>105</Typography>
                    </div>
                    <div className={styles.ViewsDiv}>
                        <Typography sx={{ fontSize: 11, color: "#717171", fontWeight: "bold" }}>Views of your post</Typography>
                        <Typography sx={{ fontSize: 12, color: "#1D72C7", fontWeight: "bold" }}>275</Typography>
                    </div>
                </div>

                <div className={styles.InsightsDiv}>
                    <Typography sx={{ fontSize: 12, color: "#717171" }}>Access exclusive tools & insights</Typography>
                    <Typography sx={{ fontSize: 11.5, color: "#434343", fontWeight: "bold" }}>Network Smarter, Try Premium Free</Typography>
                </div>

                <div className={styles.ItemsDiv}>
                    <BookmarkIcon sx={{ fontSize: 18, color: "#666666" }} />
                    <Typography sx={{ fontSize: 11.5, color: "#666666", fontWeight: "bold" }}>My items</Typography>
                </div>
            </div>
    )
}