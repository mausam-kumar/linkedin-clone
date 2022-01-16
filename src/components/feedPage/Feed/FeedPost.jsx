import styles from "./FeedPost.module.css"

export default function FeedPost({ id, icon, name, bio, time, status, img, like, comments }) {
    return (
        <>
            {img === null ? (
                <div className={styles.FeedTextCard}>
                    <div className={styles.IconDiv}>
                        <div className={styles.IconPhotoDiv}>
                            <img width="100%" src={icon} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p className={styles.AuthorName}>{name}</p>
                            <div className={styles.InfoDiv}>
                                <p>{bio}</p>
                                <p>{time}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CardStatusDiv}>
                        <p>{status}</p>
                    </div>

                    <div className={styles.LikesDiv}>
                        <div>
                            <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light" src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light" />
                            <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--1 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-EMPATHY data-test-reactions-icon-theme-light" src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="love" data-test-reactions-icon-type="EMPATHY" data-test-reactions-icon-theme="light"></img>
                            <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--2 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-PRAISE data-test-reactions-icon-theme-light" src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="celebrate" data-test-reactions-icon-type="PRAISE" data-test-reactions-icon-theme="light"></img>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: "330px" }}>
                            <p style={{ marginLeft: "5px" }}>{like}</p>
                            <p>{comments}</p>
                        </div>
                    </div>

                    <div className={styles.ButtonsDiv}>
                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="like-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                            </svg></li-icon>
                            <p>Like</p>
                        </button>

                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="speech-bubble-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                            </svg></li-icon>
                            <p>Comment</p>
                        </button>

                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="share-linkedin-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                            </svg></li-icon>
                            <p>Share</p>
                        </button>

                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="send-privately-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                            </svg></li-icon>
                            <p>Send</p>
                        </button>
                    </div>

                </div>
            ) : (
                <div className={styles.FeedPhotoCard}>

                    <div className={styles.IconDiv}>
                        <div className={styles.IconPhotoDiv}>
                            <img width="100%" src={icon} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p className={styles.AuthorName}>{name}</p>
                            <div className={styles.InfoDiv}>
                                <p>{bio}</p>
                                <p>{time}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.CardStatusDiv}>
                        <p>{status}</p>
                    </div>

                    <div className={styles.CardPhotoDiv}>
                        <img width="100%" src={img} />
                    </div>

                    <div className={styles.LikesDiv}>
                        <div>
                            <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light" src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light" />
                            <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--1 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-EMPATHY data-test-reactions-icon-theme-light" src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="love" data-test-reactions-icon-type="EMPATHY" data-test-reactions-icon-theme="light"></img>
                            <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--2 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-PRAISE data-test-reactions-icon-theme-light" src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="celebrate" data-test-reactions-icon-type="PRAISE" data-test-reactions-icon-theme="light"></img>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: "330px" }}>
                            <p style={{ marginLeft: "5px" }}>{like}</p>
                            <p>{comments}</p>
                        </div>
                    </div>

                    <div className={styles.ButtonsDiv}>
                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="like-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                            </svg></li-icon>
                            <p>Like</p>
                        </button>

                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="speech-bubble-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                            </svg></li-icon>
                            <p>Comment</p>
                        </button>

                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="share-linkedin-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                            </svg></li-icon>
                            <p>Share</p>
                        </button>

                        <button className={styles.ReactionButton}>
                            <li-icon aria-hidden="true" type="send-privately-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                            </svg></li-icon>
                            <p>Send</p>
                        </button>
                    </div>

                </div>

            )}

        </>
    )
}