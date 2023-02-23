import React from 'react';
import Contact from '../components/Contact';
import Cv from '../components/Cv';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import Projets from '../components/Projets';
import LeftLinks from '../components/SideBar';
import Technologie from '../components/Technologie';


const Home = () => {
        return (    
            <div className='homepage__container'>               
                <Navbar /> 
                <LeftLinks />
                <Presentation />
                 <Technologie />
                <Cv />
                <Projets />
                <Contact />
                <Footer />
            </div>
            
                
               
             
                
                         
        );
    }


export default Home;