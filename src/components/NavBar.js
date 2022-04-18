import React from 'react';
import { Link } from 'react-router-dom';

//导航
const NavBar = () => {
    return (
       <nav>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
       </nav>
    );
};

export default NavBar;
