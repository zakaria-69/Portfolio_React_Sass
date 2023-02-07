import React from 'react';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import LeftLinks from '../components/SideBar';


const Home = () => {
        return (    
            <div className='homepage__container'>               
                <Navbar /> 
                <LeftLinks />
                <Presentation />
            </div>
            
                
               
             
                
                         
        );
    }


export default Home;