import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center py-2 mt-auto" style={{ backgroundColor: '#2C2C2E', color: '#F1F1F1' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-2 mb-md-0">
            <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Contact</h5>
            <p style={{ margin: '0.1rem 0' }}>Fake Address, 1234</p>
            <p style={{ margin: '0.1rem 0' }}>Phone: 00 000 000 000</p>
            <p style={{ margin: '0.1rem 0' }}>Email: fakeemail@fakeemail.co</p>
          </div>
          <div className="col-md-6">
            <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <button
                style={{ background: 'none', border: 'none', color: '#F1F1F1', margin: '0 8px', padding: 0 }}
                aria-label="Facebook"
              >
                <FaFacebookF />
              </button>
              <button
                style={{ background: 'none', border: 'none', color: '#F1F1F1', margin: '0 8px', padding: 0 }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </button>
              <button
                style={{ background: 'none', border: 'none', color: '#F1F1F1', margin: '0 8px', padding: 0 }}
                aria-label="Twitter"
              >
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <p style={{ marginBottom: '0', fontSize: '0.75rem' }}>&copy; {new Date().getFullYear()} Bucket List - project</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
