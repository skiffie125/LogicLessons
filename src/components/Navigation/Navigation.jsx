import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// import Hamburger from '../Hamburger/Hamburger';


function Navigation() {
 
  return (
    <div className="Navigation">
      <nav>
        {/* <Hamburger /> */}
        <Link >
        <div className="logoContainer">
          <img src='../src\assets\lllogo.svg'  alt ="logo"/>
          <header> <h1>Logic Lessons</h1></header>
        </div>
        </Link>
        <div className='spacer'></div>
        <div className='buttons'>
          <div> 
            <Link to='/unit1'><button> Unit 1 </button></Link> 
            <Link to='/unit2'><button> Unit 2 </button></Link> 
            <Link to='/unit3'><button> Unit 3 </button></Link> 
          </div>
        </div>
        {/* <img className="bannerImage" src="/bannerNew.jpg" /> */}
      </nav>
    </div>
  );
}

export default Navigation;
