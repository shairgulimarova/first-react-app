import { useState } from "react"; 
import {Link,NavLink} from "react-router-dom"; 
import {motion} from "framer-motion"; 

import './navbar.scss';
import menuIcon from "../../images/menu.svg"
import newMovers from "../../images/movers01.svg"

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

    const showMenu = ()=>{
        setMenuActive(!menuActive);
    }

    const menuItems = [
      {
        id:1, 
        menu:"about",
        link:"/"
      },
      {
        id:2, 
        menu:"skills",
        link:"skills"
      },
      {
        id:3, 
        menu:"blog",
        link:"blog"
      },
      {
        id:4, 
        menu:"members",
        link:"members"
      },
      {
        id:5, 
        menu:"contacts",
        link:"contacts"
      }
    ]

  return (
    <nav className="navbar">
     <div className="container navbar__container">
       <Link to='/'className='navbar__logo'> <motion.img 
       animate={{rotate:360}}
       transition={{
         duration: 4,
         repeat: Infinity,
         delay:0,
       }}

       whileHover={{
         scale:1.5,
       }}
       
       className="navbar__logo-walkingFeet" width={100} src={newMovers} alt="logo" /></Link>
       <p className="navbar__name">shaiRGUL</p>
       <button onClick={showMenu}  className='navbar__toggle'> 
       <img src={menuIcon} alt="movers"></img>
       </button>
       <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
         {/* <NavLink onClick={showMenu} to="/" className='navbar__menu-link'>About</NavLink>
         <NavLink onClick={showMenu} to="/github" className='navbar__menu-link'>Github</NavLink>
         <NavLink onClick={showMenu} to="/notion"  className='navbar__menu-link'>Notion</NavLink>
         <NavLink onClick={showMenu} to="/members" className='navbar__menu-link'>Members</NavLink>
         <NavLink onClick={showMenu} to="/contacts"  className='navbar__menu-link'>Contacts</NavLink> */}
         {menuItems.map((menuItem)=>{
           return (
           <NavLink onClick={showMenu} to={menuItem.link} className="navbar__menu-link" key={menuItem.id}>{menuItem.menu}</NavLink>
         )
         })
        }
         
       </div>
     </div>
    </nav>
  );
}

export default Navbar;