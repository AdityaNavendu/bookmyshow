import React from 'react'
import {navbarStyles} from "../assets/frontend/dummyStyles.js"
import {useState} from 'react';
import { Clapperboard,Home,Film,Calendar,Mail,Ticket } from 'lucide-react';
const Navbar = () => {

    const [isOpen,setisOpen] =useState(false);
    const [isLogedin,setisLogedin]=useState(false);
    const [isScrolled,setisScrolled]=useState(false);
    
  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "movies", label: "Movies", icon: Film, path: "/movies" },
    { id: "releases", label: "Releases", icon: Calendar, path: "/releases" },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
    { id: "bookings", label: "Bookings", icon: Ticket, path: "/bookings" },
  ];
  return (
    <nav className={
      `${navbarStyles.nav.base}
      ${isScrolled?navbarStyles.nav.scrolled:
        navbarStyles.nav.notScrolled}`}>
          <div className={navbarStyles.container}>
            <div className={navbarStyles.logoContainer}>
              <div className={navbarStyles.logoIconContainer}>
                <Clapperboard className={navbarStyles.logoIcon}/>
              </div>
              <div className={navbarStyles.logoText}>cineverse</div>
            </div>
            <div className={navbarStyles.desktopNav}>
              <div className={navbarStyles.desktopNavItem}></div>
            </div>
          </div>
        </nav>
        
  )
}

export default Navbar
