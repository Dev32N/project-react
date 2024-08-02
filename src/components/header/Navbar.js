import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import './nav.css';

const MyNavbar = () => {
  return (
    <Navbar className='nav-container' expand="md">
      <Nav className="navbar-nav" navbar>
        <NavItem>
          <NavLink href="/1989Perfume" className='home'>1989Perfume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/hot-deal" className='hotdeal'>Hot Deal</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/nuoc-hoa-nam">Nước Hoa Nam</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/nuoc-hoa-nu">Nước Hoa Nữ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/son-moi">Son Môi</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/lien-he">Liên Hệ</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
