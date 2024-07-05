import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import BucketListLogo from '../img/bucket-list-logo.jpeg';
import UserLoginForm from './UserLoginForm';

const Header = () => {
  return (
    <Navbar light style={{ backgroundColor: 'white' }}> 
      <div className="container">
        <NavbarBrand href="/">
          <img 
            src={BucketListLogo}
            alt='Bucket List Logo'
            style={{ width: '50px', marginRight: '10px' }} />
        </NavbarBrand>
        <UserLoginForm />
      </div>
    </Navbar>
  );
};

export default Header;
