import { useState } from "react";
import styles from "./Nav.module.css"

function Nav({setActive, active}){

    const [hamburger, setHamburger] = useState(false)

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
        <div className={styles.hamburgerSection}>
                <div className={styles.hamburgerContainer}>
                    <div className={styles.userTitle}>
                        <h1>Hajira</h1>
                    </div>
                    <div className={styles.hamburgerIcon}>
                        <i className="ri-menu-line" onClick= {((e) =>{ e.preventDefault();setHamburger(true)})}></i>

                    </div>

                </div>
        </div>
        <div className={hamburger === true ? styles.hamburgerMenuActive : styles.hamburgerMenuNotActive  }>
            <div className={styles.menuContainer}>
                <div className={styles.header}>
                    <i class="ri-arrow-left-s-line" onClick= {((e) =>{ e.preventDefault();setHamburger(false)})}></i>
                </div>
                <div className={styles.menuNavigation}>
                    <div className={styles.title}>
                        <h1>Menu</h1>
                    </div>
                    <div className={active === 'Home' ? styles.activeNav : styles.notActiveNav}>
                        <i className="ri-home-heart-fill"></i>
                        <h1 onClick={ (e) => {e.preventDefault(); setActive('Home')}}>Home</h1>
                        
                        
                    </div>
                    <div className={active === 'About' ? styles.activeNav : styles.notActiveNav}>
                        <i class="ri-user-heart-line"></i>
                        <h1 onClick={ (e) => {e.preventDefault(); setActive('About')}}>About</h1>
                        
                    </div>
                    <div className={active === 'Contact' ? styles.activeNav: styles.notActiveNav}>
                        <i class="ri-mail-ai-fill"></i>
                        <h1>Contact</h1>
                        

                       
                    </div>
                </div>
                <div className={styles.menuSocials}> 
                    <img src="Images/socialIcons/whatsapp-Icon.png" alt="whatsapp" />
                    <img src="Images/socialIcons/youtube-Icon.png" alt="youtube" />
                    <img src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                    <img src="Images/socialIcons/linkedin-Icon.png" alt="linkedin" />
                    <img src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />

                </div>
                <div className={styles.menuBottom}>
                    <h1>#TEAMHAJIRA</h1>
                </div>

            </div>
           
        </div>

        
        </>
    )
}

export default Nav