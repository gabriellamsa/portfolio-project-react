import React, { useState } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import BucketListLogo from '../img/bucket-list-logo.jpeg';
import UserLoginForm from './UserLoginForm';

const HomePage = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleGetStarted = () => {
    setLoginModalOpen(true);
  };

  return (
    <>
      <Navbar color="light" light expand="md" className="shadow-sm">
        <div className="container">
          <NavbarBrand href="/">
            <img
              src={BucketListLogo}
              alt='Bucket List Logo'
              style={{ width: '50px', marginRight: '10px', borderRadius: '50%' }}
            />
          </NavbarBrand>
        </div>
      </Navbar>
      <div className="hero-section text-center d-flex align-items-center" style={{ height: '100vh', background: 'linear-gradient(0deg, rgba(121, 76, 248, 1) 10%, rgba(121, 76, 248, .9) 35%, rgba(121, 76, 248, 0) 100%)' }}>
        <div className="container bg-light rounded p-5 shadow" style={{ maxWidth: '500px' }}>
          <h1 className="mb-4 text-primary">Bucket List App!</h1>
          <p className="text-muted">You are in the right place to create the list of your dreams.</p>
          <Button color="primary" onClick={handleGetStarted} className="rounded-pill mt-3">Get Started</Button>
        </div>
      </div>
      <UserLoginForm loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
    </>
  );
};

export default HomePage;
