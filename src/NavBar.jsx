 import { NavLink } from "react-router-dom"
 
 function NavBar(){
    return(
<div className="nav">
<nav>
    <NavLink to='/'
    >
        
        Home
    </NavLink>
    <NavLink
    to='/about me'>About Me</NavLink>
    <NavLink to='/skills'>Skills</NavLink>
    <NavLink to='/portfolio'>Portfolio</NavLink>
    <NavLink to='/blog'>Blog</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
</nav>
</div>
    )
 }
 export default NavBar