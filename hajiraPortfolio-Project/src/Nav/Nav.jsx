import styles from "./Nav.module.css"

function Nav({setActive, active}){

    return(
        <>
        <div className={styles.navSection}>
        <div className={styles.navContainer}>
            <div className={styles.navigation}>
                <div className={active === 'Home' ? styles.activeNav : styles.notActiveNav}>
                    <h1 onClick={ (e) => {e.preventDefault(); setActive('Home')}}>Home</h1>
                    <hr className={active === 'Home' ? styles.activeNavUnderline : styles.notActiveUnderline}/>
                </div>
                <div className={active === 'About' ? styles.activeNav : styles.notActiveNav}>
                    <h1 onClick={ (e) => {e.preventDefault(); setActive('About')}}>About</h1>
                    <hr className={active === 'About' ? styles.activeNavUnderline : styles.notActiveUnderline}/>
                </div>
                <div className={active === 'Contact' ? styles.activeNav: styles.notActiveNav}>
                    <h1>Contact</h1>
                    <hr className={active === 'Contact' ? styles.activeNavUnderline : styles.notActiveUnderline}/>
                </div>
            </div>
            <div className={styles.userTitle}>
                <h1>Hajira</h1>
            </div>
            <div className={styles.socialIcons}>
                <img src="Images/socialIcons/whatsapp-Icon.png" alt="whatsapp" />
                <img src="Images/socialIcons/youtube-Icon.png" alt="youtube" />
                <img src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                <img src="Images/socialIcons/linkedin-Icon.png" alt="linkedin" />
                <img src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
              
            </div>

        </div>

        </div>

        
        </>
    )
}

export default Nav