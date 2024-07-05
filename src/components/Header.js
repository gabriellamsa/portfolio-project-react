import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import UserLoginForm from './UserLoginForm';

const Header = () => {
  return (
    <Navbar light style={{ backgroundColor: 'white' }}> 
      <div className="container">
        <NavbarBrand href="/">Bucket List - Project!</NavbarBrand>
        <UserLoginForm />
      </div>
    </Navbar>
  );
};

export default Header;
