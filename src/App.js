 import Navbar  from "./compononets/Navbar/navbar";
 import Intro from "./compononets/Intro/intro";
 import About from "./compononets/About/about"
 import Work from "./compononets/Work/work";
import Contact from "./compononets/Contact/contact";
import Footer from "./compononets/Footer/footer";

 

function App() {
  return (
    <div className='App'>
         <Navbar/>
         <Intro/>
         <br></br>
         <About/>
         <Work/>
         <Contact/>
         <Footer/>
    </div>
  );
}

export default App;
