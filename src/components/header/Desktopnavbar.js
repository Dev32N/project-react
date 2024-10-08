import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './desktopnav.css';

const Desktopnavbar = () => {
  return (
    <Navbar className='nav-container' expand="md">
      <Nav className="navbar-nav" navbar>
        <NavItem className="nav-item">
          <Link to="/" className='nav-link home'>Cafe-Fresh</Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link to="/nuoc-hoa-nam" className='nav-link nuoc-hoa-nam'>Cà phê hạt rang</Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link to="/nuoc-hoa-nu" className='nav-link nuoc-hoa-nu'>Menu trà</Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link to="/blog" className='nav-link blog'>Blog</Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link to="/lien-he" className='nav-link lienhe'>Liên Hệ</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Desktopnavbar;
