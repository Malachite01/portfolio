import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import 'transition-style';

const NavBar = () => {
  const location = useLocation();
  const nav = useRef<HTMLDivElement | null>(null);
  const navLinks = useRef<HTMLDivElement | null>(null);
  const navLogos = useRef<HTMLDivElement | null>(null);
  const navHamburger = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  
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
            <li><Link to="/" className={'nav-link' + (location.pathname === '/' ? ' selected' : '')}> Accueil</Link></li>
            <li><Link to="/projects" className={'nav-link' + (location.pathname === '/projects' ? ' selected' : '')}> Projets</Link></li>
            <li><Link to="/skills" className={'nav-link' + (location.pathname === '/skills' ? ' selected' : '')}> Compétences</Link></li>
            <li><Link to="/contact" className={'nav-link' + (location.pathname === '/contact' ? ' selected' : '')}>Contact</Link></li>
            <li><Link to="/a_propos" className={'nav-link' + (location.pathname === '/a_propos' ? ' selected' : '')}>A propos</Link></li>
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
