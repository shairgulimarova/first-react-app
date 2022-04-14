import { useState } from "react"; 
import {Link,NavLink} from "react-router-dom"; 

import './navbar.scss';
import menuIcon from "../../images/menu.svg"
import newMovers from "../../images/movers01.svg"

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

    const showMenu = ()=>{
        setMenuActive(!menuActive);
    }

  return (
    <nav className="navbar">
     <div className="container navbar__container">
       <Link to='/'className='navbar__logo'> <img width={200} src={newMovers}></img></Link>
       <button onClick={showMenu}  className='navbar__toggle'> 
       <img src={menuIcon} alt="movers"></img>
       </button>
       <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
         <NavLink onClick={showMenu} to="/about" className='navbar__menu-link'>About</NavLink>
         <NavLink onClick={showMenu} to="/github" className='navbar__menu-link'>Github</NavLink>
         <NavLink onClick={showMenu} to="/notion"  className='navbar__menu-link'>Notion</NavLink>
         <NavLink onClick={showMenu} to="/members" className='navbar__menu-link'>Members</NavLink>
         <NavLink onClick={showMenu} to="/contacts"  className='navbar__menu-link'>Contacts</NavLink>
       </div>
     </div>
    </nav>
  );
}

export default Navbar;