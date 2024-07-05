import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Contact</h5>
            <p>Fake Address, 1234</p>
            <p>Phone: 00 000 000 000</p>
            <p>Email: fakeemail@fakeemail.co</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Bucket List - project</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
