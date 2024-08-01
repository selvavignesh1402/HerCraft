import React from 'react';
import './ContactUs.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from './Navbar';
import Footer from './Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div className="contact-header">
        <h1>Contact</h1>
        <p>If you'd like to get in touch with us, please don't hesitate lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
      </div>
      <div className="contact-container">
        <div className='coninfo'>
          <h2>Contact Information</h2>
          <p>Email: homemakers@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ marginRight: '10px' }} />
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{ marginRight: '10px' }} />
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon style={{ marginRight: '10px' }} />
              Twitter
            </a>
          </div>
        </div>
        <div className="contact-left">
          <div className="contact-form">
            <h2>Contact us</h2>
            <form>
              <div className="form-row">
                <TextField
                  label="FIRST NAME"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  InputProps={{ disableUnderline: true }}
                  style={{ marginRight: '25px' }}
                />
                <TextField
                  label="LAST NAME"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <div className="form-row">
                <TextField
                  label="EMAIL"
                  type="email"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  InputProps={{ disableUnderline: true }}
                  style={{ marginRight: '25px' }}
                />
                <TextField
                  label="PHONE NUMBER"
                  type="text"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <TextField
                label="MESSAGE"
                multiline
                rows={1}
                variant="standard"
                fullWidth
                margin="normal"
                InputProps={{ disableUnderline: true }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ alignSelf: 'flex-start' }}
              >
                Submit →
              </Button>
            </form>
          </div>
          <div className="contact-email">
            <p>EMAIL US</p>
            <p>homemakers@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
