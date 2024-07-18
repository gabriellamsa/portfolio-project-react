import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Button } from 'reactstrap';
import BucketListLogo from '../img/bucket-list-logo.jpeg';
import UserLoginForm from './UserLoginForm';

const HomePage = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleGetStarted = () => {
    setLoginModalOpen(true);
  };

  return (
    <>
      <Navbar color="light" light expand="md" className="shadow-sm text-dark">
        <div className="container">
          <NavbarBrand href="/">
            <img 
              src={BucketListLogo}
              alt='Bucket List Logo'
              style={{ width: '50px', marginRight: '10px', borderRadius: '50%' }} 
            />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/list" className="text-muted">Create List</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <Container className="mt-5 bg-light rounded p-4">
        <h1 className="text-center mb-4 text-info">TO DO List App!</h1>
        <p className="text-center text-muted">You are in the right place to create the list of your dreams.</p>
        <div className="text-center mt-4">
          <Button color="info" onClick={handleGetStarted} className="rounded-pill">Get Started</Button>
        </div>
      </Container>
      <UserLoginForm loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
    </>
  );
};

export default HomePage;
