import React from 'react';
import './ContactUs.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div className="contact-header">
        <h1>Contact</h1>
        <p>If you'd like to get in touch with us, please don't hesitate lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
      </div>
      <div className="contact-container">
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
          <div className="social-links">
            <p>homemakers@gmail.com • Instagram • Facebook</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
