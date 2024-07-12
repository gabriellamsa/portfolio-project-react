import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Button } from 'reactstrap';
import BucketListLogo from '../img/bucket-list-logo.jpeg';
import UserLoginForm from './UserLoginForm';

const HomePage = () => {
  return (
    <>
      <Navbar light expand="md" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <NavbarBrand href="/">
            <img 
              src={BucketListLogo}
              alt='Bucket List Logo'
              style={{ width: '50px', marginRight: '10px' }} 
            />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/list">Create List</NavLink>
            </NavItem>
            <NavItem>
              <UserLoginForm />
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <Container className="mt-5">
        <h1 className="text-center mb-4">Welcome to Your Dream Bucket List!</h1>
        <p className="text-center">You are in the right place to create the list of your dreams.</p>
        <div className="text-center mt-4">
          <Button color="primary" href="/list">Get Started</Button>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
