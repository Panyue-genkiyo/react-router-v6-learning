import React from 'react';
import { NavLink, Link } from 'react-router-dom';

//导航
//navLink在链接被触发时添加class:active
const NavBar = () => {

    //props给导航加上active时的样式
    //当某个link被点击时，isActive会被置为true
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return (
       <nav>
           {/*<Link to='/'>Home</Link>*/}
           {/*<Link to='/about'>About</Link>*/}
           <NavLink style={navLinkStyles} to='/'>Home</NavLink>
           <NavLink style={navLinkStyles} to='/about'>About</NavLink>
       </nav>
    );
};

export default NavBar;
