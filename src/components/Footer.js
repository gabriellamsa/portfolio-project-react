import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 mt-auto" style={{ backgroundColor: '#B4B4B8', color: '#F1F1F1' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>Contact</h5>
            <p>Fake Address, 1234</p>
            <p>Phone: 00 000 000 000</p>
            <p>Email: fakeemail@fakeemail.co</p>
          </div>
          <div className="col-md-6">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
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
