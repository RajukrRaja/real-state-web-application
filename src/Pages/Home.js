import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Button, Typography, Box, Link } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <Box className="home-container">
      <Box className="main-container">
        {/* Left Section */}
        <Box className="left-home">
          <Typography variant="h1" className="home-heading">
            Find Faster, Find Smarter
          </Typography>
          <Link href="./Property" target="_blank" rel="noopener noreferrer" underline="none">
            <Button variant="contained" color="primary" className="find-more-btn">
              Find more ➡
            </Button>
          </Link>
        </Box>

        {/* Right Section */}
        <Box className="right-home">
          <img
            src="https://www.homelane.com/blog/wp-content/uploads/2022/11/single-floor-house-design.jpg"
            alt="Modern single-floor house design"
            className="home-image"
          />
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box className="bottom-heading">
        <Typography>
          Welcome to our company! We are dedicated to providing high-quality
          products/services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>

      {/* Social Media Icons */}
      <Box className="social-icons">
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </Link>
      </Box>
    </Box>
  );
}

export default Home;
