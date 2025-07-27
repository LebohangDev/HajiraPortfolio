import styles from './Footer.module.css'

function Footer({setActive, active}){

    return(
        <>

        <div className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <div className={styles.footerHeader}>
                    <h1>Hajira</h1>

                </div>
                <div className={styles.footerNav}>
                    <div className={active === 'Home' ? styles.activeNav : styles.notActiveNav}>
                        <h1 onClick={ (e) => {e.preventDefault(); setActive('Home')}}>Home</h1>
                        
                    </div>
                    <div className={active === 'About' ? styles.activeNav : styles.notActiveNav}>
                        <h1 onClick={ (e) => {e.preventDefault(); setActive('About')}}>About</h1>
                        
                    </div>
                    <div className={active === 'Contact' ? styles.activeNav: styles.notActiveNav}>
                        <h1>Contact</h1>
                        
                    </div>

                </div>
                <div className={styles.footerSocials}>
                    <img src="Images/socialIcons/whatsapp-Icon.png" alt="whatsapp" />
                    <img src="Images/socialIcons/youtube-Icon.png" alt="youtube" />
                    <img src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                    <img src="Images/socialIcons/linkedin-Icon.png" alt="linkedin" />
                    <img src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />                    
                </div>

                
                

                <div className={styles.footerBottom}>
                    <div className={styles.footerLine}>
                        <hr />

                    </div>
                    <div className={styles.footerBottomContainer}>
                        <div className={styles.footerCopyright}>
                            <p>Copyright 2025</p>
                            <i class="ri-copyright-line"></i>

                        </div>
                        <div className={styles.dev}>
                            <p>Developed By LDEV</p>
                        </div>

                        <div className={styles.Socials}>
                            <img src="Images/socialIcons/whatsapp-Icon.png" alt="whatsapp" />
                            <img src="Images/socialIcons/youtube-Icon.png" alt="youtube" />
                            <img src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                            <img src="Images/socialIcons/linkedin-Icon.png" alt="linkedin" />
                            <img src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />                    

                        </div>

                    </div>


                    
                

                </div>
                    
            
                

            </div>
        </div>

        
        </>
    )

}

export default Footer