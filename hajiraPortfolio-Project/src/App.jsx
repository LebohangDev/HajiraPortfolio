import Nav from "./Nav/Nav.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState, useEffect } from "react";
import { AnimatePresence, motion} from "framer-motion"


function App() {

 

  const [active, setActive] = useState('Home');


  useEffect( () =>{
    window.scrollTo(0, 0)

  }, [active])


  return (
    <>

    <div className="header">
      <Nav setActive = {setActive} active={active}/>
    </div>

    <div className="Content">
      <div className={active === 'Home' ? 'activeSection' : 'notActive'}>
        <Home active={active}/>
        

      </div>


      <div className={active === 'About' ? 'activeSection' : 'notActive'}>
        <About/>
        

      </div>
     
      

    </div>
    <div className="footer">
      <Footer setActive= {setActive} active={active}/>

    </div>
    
    

      
    </>
  )
}

export default App
