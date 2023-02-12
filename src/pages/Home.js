import React from 'react';
import Cv from '../components/Cv';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
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
            </div>
            
                
               
             
                
                         
        );
    }


export default Home;