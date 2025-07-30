import styles from "./About.module.css";


function About(){
    return(
        <>
        <div className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                <div className={styles.section1}>
                    <div className={styles.title}>
                        <h1>ABOUT</h1>
                        <h1>ME</h1>
                    </div>
                    <div className={styles.userIMGContainer}>
                        <div className={styles.user}>
                            <img src="Images/Hajira/hajiraAbout.png" alt="" />

                        </div>
                        

                        <div className={styles.socialIcons}>
                            <img src="Images/socialIcons/gmail-Icon.png" alt="tiktok" />
                            <img src="Images/socialIcons/gmail-Icon.png" alt="tiktok" />
                            <img src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                            <img src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                            <img src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                            <img src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                            <img src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                        </div>

                    </div>

                    
                </div>
                
                <div className={styles.section2}>
                    <div className={styles.descriptionContainer}>
                        <p>I bring brand ads to life through mood, motion, and storytelling.</p>
                        <p>On TikTok and Instagram, I shoot content that feels real, story-driven, and always on vibe.</p>

                    </div>

                    <div className={styles.statsCard}>
                        <div className={styles.stat1}>
                            <h1>5</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div className={styles.stat2}>
                            <h1>300K</h1>
                            <p>Across all Socials</p>
                        </div>
                        <div className={styles.stat3}>
                            <h1>16+</h1>
                            <p>Companies Represented</p>
                        </div>
                        <div className={styles.stat4}>
                            <h1>100+</h1>
                            <p>#ad Content Filmed</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </div>
        
        </>
    )
}

export default About