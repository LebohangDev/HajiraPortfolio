import Nav from "./Nav/Nav.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import { useState } from "react";


function App() {

  const [active, setActive] = useState('Home');


  return (
    <>

    <div className="header">
      <Nav setActive = {setActive} active={active}/>
    </div>

    <div className="Content">
      <div className={active === 'Home' ? 'activeSection' : 'notActive'}>
        <Home/>

      </div>


      <div className={active === 'About' ? 'activeSection' : 'notActive'}>
        <About/>

      </div>

    </div>

    <div className="Footer">

    </div>
      
    </>
  )
}

export default App
