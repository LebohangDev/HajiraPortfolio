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
                            <img src="/Images/Hajira/hajiraAbout.png" alt="" />

                        </div>
                        

                        <div className={styles.socialIcons}>
                            <img src="/Images/socialIcons/youtube-Icon.png" alt="youtube" />
                            <img src="/Images/socialIcons/youtube-Icon.png" alt="youtube" />
                            <img src="/Images/socialIcons/instagram-Icon.png" alt="instagram" />
                            <img src="/Images/socialIcons/instagram-Icon.png" alt="instagram" />
                            <img src="/Images/socialIcons/linkedin-Icon.png" alt="linkedin" />
                            <img src="/Images/socialIcons/linkedin-Icon.png" alt="linkedin" />
                            <img src="/Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                            <img src="/Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                        </div>

                    </div>
                </div>
                <div className={styles.section2}>
                    <div className={styles.descriptionContainer}>
                        <p>I’m a content creator fueled by creativity, 
                            curiosity, and a serious love for capturing 
                            moments that feel like something. I’m all 
                            about blending mood, music, and motion 
                        </p>

                        <p>My work lives across platforms like TikTok, Instagram, and YouTube, where I dive 
                            into visuals that range from aesthetic edits to real-life snippets. I don’t believe in 
                            just creating for the algorithm—I create for connection, for the vibe, and for the 
                            art of it. When I’m not filming or editing, you’ll probably find me chasing light, 
                            learning new transitions, or sketching out my next visual idea with too much 
                            coffee
                        </p>
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