import React from 'react'
import {useState} from 'react';
import './Navbar.css'
import { Clapperboard,Home,Film,Calendar,Mail,Ticket } from 'lucide-react';
import { NavLink } from 'react-router-dom';
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
    <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
          <div className="nav-container">
            <div className="brand">
              <div className="brand-icon">
                <Clapperboard className="brand-icon__svg"/>
              </div>
              <div className="brand-name">cineverse</div>
            </div>
            <div className="desktop-nav">
              {navItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.id} className="nav-item">
                    <NavLink
                      to={item.path}
                      end
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'nav-link--active' : 'nav-link--inactive'}`
                      }
                    >
                      <ItemIcon className="nav-link__icon"/>
                      <span>{item.label}</span>
                      <span className="pill-underline"/>
                    </NavLink>
                    <span className="pill-border"/>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
        
  )
}

export default Navbar
