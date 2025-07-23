import styles from './Home.module.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Home(){

    let Socials = [
        {
            social: 'Instagram',
            description: 'Fashion | Lifestyle | Creator Just a girl who drives with elite music taste',
            followers: 2450,
            img:'Images/SocialImages/RUNNER-UP3.jpg',
            icon:'Images/socialIcons/instagram-Icon.png',
            posts: 132
        },
        {
            social: 'TikTok',
            description: 'Fast-paced, trend-savvy videos built for engagement',
            followers: 7600,
            img:'Images/SocialImages/RUNNER-UP4.jpg',
            icon:'Images/socialIcons/tiktok-Icon.png',
            posts: 89
        },
        {
            social: 'YouTube',
            description: 'A collection of long-form content, vlogs, and curated Shorts that blend storytelling with creativity',
            followers: 1800,
            img:'Images/SocialImages/Smart-Coffee-Mug3.jpg',
            icon:'Images/socialIcons/youtube-Icon.png',
            posts: 42
        }
    ];
    let masonryIMAGES = [
        { img: 'Images/ImagePreview/img1.jpg' },
        { img: 'Images/ImagePreview/img2.jpg' },
        { img: 'Images/ImagePreview/img3.jpg' },
        { img: 'Images/ImagePreview/img4.jpg' },
        { img: 'Images/ImagePreview/img5.jpg' },
        { img: 'Images/ImagePreview/img6.jpg' },
        { img: 'Images/ImagePreview/img7.jpg' },
        { img: 'Images/ImagePreview/img8.jpg' },
        { img: 'Images/ImagePreview/img9.jpg' },
        { img: 'Images/ImagePreview/img10.jpg' },
        { img: 'Images/ImagePreview/img11.jpg' },
        { img: 'Images/ImagePreview/img12.jpg' },
        { img: 'Images/ImagePreview/img13.jpg' },
        { img: 'Images/ImagePreview/img14.jpg' },
    ];

    return(
        <>
        
        <div className={styles.homeContainer}>
            <div className={styles.heroSection}>
                <div className={styles.sakura_Tree}>
                        <img src="Images/sakura_Tree.png" alt="" />
                </div>
               
                <div className={styles.section1}>
                    <div className={styles.title}>
                        <h1><span>C</span>ontent</h1>
                        <h1><span>C</span>reator</h1>

                    </div>
                    
                    <div className={styles.seeMoreButton}>
                        <i className="ri-arrow-right-double-fill"></i>
                        <button><span>SEE MORE</span></button>
                        
                        

                    </div>
                   
                    
                    
                </div>

                <div className={styles.section2}>
                    <div className={styles.userImg}>
                        <img src="Images/Hajira/hajiraHome.png" alt="" />
                        <div className={styles.blob}>
                            <img src="Images/Hajira/background-Blob.png" alt="" />  

                        </div>
                        
                    </div>
                   
                   
                    

                </div>
                <div className={styles.section3}>
                    <div className={styles.userQuote}>
                        <p>"“Content is <span>connection</span> made visual” – and here, every frame tells a <span>story</span>. Welcome to a portfolio where <span>creativity</span> meets <span>purpose</span>."</p>

                    </div>
                    <div className={styles.dots}>
                        <img src="Images/dots/dot1.png" alt="" />
                        <img src="Images/dots/dot2.png" alt="" />
                        <img src="Images/dots/dot3.png" alt="" />
                    </div>
        

                </div>

            </div>
            <div className={styles.socialsSection}>
                

                <div className={styles.socialsContainer}>
                   

                    {Socials.map((S, index) =>(
                        <div className={styles.socialCard} key={index}>
                           {index === 2 && <div className={styles.socialsHeader}>
                                <h1>#TEAMHAJRA</h1>
                        </div>}
                                
                            <div className={styles.content1}>
                                <div className={styles.imgHolder}>
                                    <img src={S.img} alt="" />
                                </div>
                                <div className={styles.header}>
                                    <h1>{S.social}</h1>
                                    <img src={S.icon} alt="" />

                                </div>
                                <div className={styles.description}>
                                    <p>{S.description}</p>
                                </div>


                            </div>
                            <div className={styles.content2}>
                                <div className={styles.socialNumbers}>
                                    <div className={styles.followers}>
                                        <i className="ri-user-line"></i>
                                        <p>{S.followers}</p>
                                    </div>
                                    <div className={styles.postCount}>
                                        <i className="ri-multi-image-line"></i>
                                        <p>{S.posts}</p>
                                    </div>

                                </div>
                                <div className={styles.followButton}>
                                    
                                    <button>Follow Me</button>
                                    <i class="ri-add-fill"></i>
                                </div>
                            </div>
                            


                            
                        </div>

                    ))}


                </div>
                
            </div>
            <div className={styles.collaborationsSection}>
               
                
                
                <div className={styles.collaborationsContainer}>
                   
                    <div className={styles.contents}>
                        
                        <div className={styles.content1}>
                            <div className={styles.collaborationsHeader}>
                                <h1>Collaborations</h1>

                            </div>
                        
                            <div className={styles.collabStats}>
                                <div className={styles.stat1}>
                                    <h1>16 +</h1>
                                    <p>Companies Represented</p>
                                </div>
                                <div className={styles.stat2}>
                                    <h1>100 +</h1>
                                    <p>#ad Content filmed</p>
                                </div>
                            </div>
                            <div className={styles.contactButton}>
                                <button>CONTACT</button>
                                <p>Lets Work Together!</p>

                            </div>

                        </div>
                        <div className={styles.content2}>
                            <div className={styles.title}>
                                <p>Over time, I’ve had the privilege of
                                   collaborating with a variety of brands,
                                   ranging from local businesses to well-known
                                   companies
                                </p>
                            </div>
                            <div className={styles.description}>
                                <p>I worked to create custom ad content tailored for
                                   advertisements for Companies such as Dunkin Donuts, DU, and EDNOC . Each collaboration
                                   reflects not only my creativity and storytelling but also real results in
                                   reach, engagement, and influence
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className={styles.adCompanies}>
                        <img src="Images/Companies/Activia_Logo.png" alt="" />
                        <img src="Images/Companies/QV_Logo.png" alt="" />
                        <img src="Images/Companies/DU_Logo.png" alt="" />
                        <img src="Images/Companies/Mcdonalds_Logo.png" alt="" />
                        <img src="Images/Companies/Dunkin_Logo.png" alt="" />
                        <img src="Images/Companies/Adnoc_Logo.png" alt="" />
                        <img src="Images/Companies/Bath_Logo.png" alt="" />
                    </div>
                    
                    
                    
                    


                </div>

            </div>

            <div className={styles.previewSection}>
                <div className={styles.previewContainer}>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                        <Masonry columnsCount={3} gutter="15rem">

                            {masonryIMAGES.map((MI, index) =>(
                        
                                <div className={styles.ProjectImg} key={index} >
                                    <img src={MI.img} alt='' />
                                </div>
                            

                            

                        
                    ))}



                </Masonry>


            
            </ResponsiveMasonry>
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Home