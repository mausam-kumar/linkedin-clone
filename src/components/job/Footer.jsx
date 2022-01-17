import styles from "./Footer.module.css";

export default function Footer(){
    return (
        <>
            <div className={styles.footerDiv}>
                <button>About</button>
                <button>Accessibility</button>
                <button>Help Center</button>
                <button>Privacy & Terms</button>
                <button>Add Choices</button>
                <button>Advertising</button>
                <button>Business Services</button>
                <button>Get the LinkedIn app</button>
                <button>More</button>
            </div>
            <div className={styles.footerCopyRight}>
                <div>
                    <div className={styles.footerCopyRightLogo}><img src="/images/linkedin.png"/></div>
                    <div><p>LinkedIn Corporation @ 2022</p></div>
                </div>
            </div>
        </>
    )
}