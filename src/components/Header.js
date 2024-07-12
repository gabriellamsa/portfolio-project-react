import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import BucketListLogo from '../img/bucket-list-logo.jpeg';

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
      </div>
    </Navbar>
  );
};

export default Header;
