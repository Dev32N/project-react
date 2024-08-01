import React from 'react';
import './nav.css'; // Import the CSS file
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';

function App() {
    return (
        <div className='nav-container'>
            <Container>
                <Navbar color="light" expand="lg">
                    <NavbarBrand href="#">
                        <img src='./images/logo-trans.png' alt='logo' title='1989 perfume' />
                    </NavbarBrand>
                    <div className='searchBar'>
                        <input type='text' placeholder='Tìm kiếm mẫu nước hoa....' />
                        <button>
                            <span><i className="fa-solid fa-magnifying-glass"></i></span>
                        </button>
                    </div>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="nav-content">
                            <NavItem>
                                <NavLink href="#">Trang Chủ</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Sản Phẩm
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Flash Sale
                                    </DropdownItem>
                                    <DropdownItem>
                                        Nước Hoa Nam
                                    </DropdownItem>
                                    <DropdownItem>
                                        Nước Hoa nữ
                                    </DropdownItem>
                                    <DropdownItem>
                                        Nước hoa giá sốc
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="#">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Liên Hệ</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default App;
