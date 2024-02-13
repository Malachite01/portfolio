import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import 'transition-style';
import logo_c from "../../img/logos/logo-c-opt.svg";
import logo from "../../img/logos/logo.svg";
import EyeComponent from './EyeComponent';

const NavBar = () => {
  const location = useLocation();
  const nav = useRef<HTMLDivElement | null>(null);
  const navLinks = useRef<HTMLDivElement | null>(null);
  const navLogos = useRef<HTMLDivElement | null>(null);
  const navHamburger = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false)
  
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
      if (navHamburger.current) {
        navHamburger.current.style.filter = 'invert(1)';
      }
    } else {
      navLinks.current?.classList.remove('open');
      nav.current?.classList.remove('open');
      navLogos.current?.classList.remove('open');
      if (navHamburger.current) {
        navHamburger.current.style.filter = 'invert(0)';
      }
    }
  }, [isOpen]);

  

  return (
    <div className='navbar-component' data-testid='navbar-component'>
      <Link to="/" className="nav-logo">
        <div className='nav-logos' ref={navLogos}>
          <img src={logo} alt="logo caraman optique" width={55} />
          <img src={logo_c} alt="logo caraman optique" width={100} />
        </div>
      </Link>
      <nav className='' ref={nav}>
        <div className="nav-links" ref={navLinks}>
          <ul onClick={() => setOpen(false)}>
            <li><Link to="/" className={'nav-link' + (location.pathname === '/' ? ' selected' : '')}> Accueil</Link></li>
            <li><Link to="/collections" className={'nav-link' + (location.pathname === '/collections' ? ' selected' : '')}> Collections</Link></li>
            <li><Link to="/examen_de_vue" className={'nav-link' + (location.pathname === '/examen_de_vue' ? ' selected' : '')}> Examen de vue</Link></li>
            <li><Link to="/contact" className={'nav-link' + (location.pathname === '/contact' ? ' selected' : '')}>Contact</Link></li>
            <li><Link to="/a_propos" className={'nav-link' + (location.pathname === '/a_propos' ? ' selected' : '')}>A propos</Link></li>
          </ul>
          <ul className='nav-eye'>
            <li><EyeComponent follow/></li>
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
