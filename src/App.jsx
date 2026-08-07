import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Footer from "./components/layout/Footer";

function App(){

    return(

        <>

            <Navbar/>

            <Hero/>

            <Services/>

            <Process/>

            <Contact/>

            <WhatsAppButton/>

            <Footer/>
        </>

    )

}

export default App;