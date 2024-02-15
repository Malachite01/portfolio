import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import 'transition-style';
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const nav = useRef<HTMLDivElement | null>(null);
  const navLinks = useRef<HTMLDivElement | null>(null);
  const navLogos = useRef<HTMLDivElement | null>(null);
  const navHamburger = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('home');
  
  const closeNav = (e: MouseEvent) => {
    if (navLinks.current && navHamburger.current && !navLinks.current.contains(e.target as Node) && !navHamburger.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeNav);
    return () => {
      document.removeEventListener('mousedown', closeNav);
    };
  }, []);

  useEffect (() => {
    if (isOpen) {
      navLinks.current?.classList.add('open');
      nav.current?.classList.add('open');
      navLogos.current?.classList.add('open');
    } else {
      navLinks.current?.classList.remove('open');
      nav.current?.classList.remove('open');
      navLogos.current?.classList.remove('open');
    }
  }, [isOpen]);

  return (
    <div className='navbar-component' data-testid='navbar-component'>
      <nav ref={nav}>
        <div className="nav-links" ref={navLinks}>
          <ul onClick={() => setOpen(false)}>
            <li>
              <AnchorLink 
                href="#top" 
                className={'nav-link' + (selectedItem === 'home' ? ' selected' : '')} 
                onClick={()=>{setSelectedItem('home')}}> Accueil
              </AnchorLink>
            </li>
            <li>
              <AnchorLink 
                href="#projects" 
                className={'nav-link' + (selectedItem === 'projects' ? ' selected' : '')}
                onClick={()=>{setSelectedItem('projects')}}>Projets
              </AnchorLink></li>
            <li>
              <AnchorLink 
                href="#skills" 
                className={'nav-link' + (selectedItem === 'skills' ? ' selected' : '')}
                onClick={()=>{setSelectedItem('skills')}}>Compétences
              </AnchorLink></li>
            <li>
              <AnchorLink 
                href="#contact"
                className={'nav-link' + (selectedItem === 'contact' ? ' selected' : '')}
                onClick={()=>{setSelectedItem('contact')}}>Contact
              </AnchorLink></li>
            <li>
              <AnchorLink 
                href="#contact"
                className={'nav-link' + (selectedItem === 'about' ? ' selected' : '')}
                onClick={()=>{setSelectedItem('about')}}>A propos
              </AnchorLink></li>
          </ul>
        </div>
        
      
      </nav>

      <div className="nav-hamburger" ref={navHamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen}/>
      </div>
    </div>
  );
}

export default NavBar;
