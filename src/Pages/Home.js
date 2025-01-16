import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Button, Typography, Box, Link, TextField, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredProperties, setFeaturedProperties] = useState([]); // Initialize as an empty array
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/featured'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeaturedProperties(data || []); // Default to empty array if data is falsy
      } catch (error) {
        console.error('Error fetching properties:', error);
        setFeaturedProperties([]); // Fallback to empty array in case of error
      } finally {
        setIsLoading(false); // Stop loading once fetch is complete
      }
    };

    fetchProperties();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  const testimonials = [
    { text: '"Amazing service! Found my dream home in no time."', author: 'John Doe' },
    { text: '"The platform is user-friendly and the property listings are comprehensive."', author: 'Jane Smith' },
    { text: '"Highly recommend! Their team was very helpful throughout the entire process."', author: 'Peter Jones' },
  ];

  return (
    <Box className="home-container">
      {/* Main Section */}
      <Box className="main-container">
        <Box className="left-home">
          <Typography variant="h1" className="home-heading">Find Faster, Find Smarter</Typography>
          <Typography variant="h6" className="home-subheading">
            Discover your perfect property with our advanced search and intuitive platform.
          </Typography>
          <Link href="./Property" target="_blank" rel="noopener noreferrer" underline="none">
            <Button variant="contained" color="primary" className="find-more-btn">Find more ➡</Button>
          </Link>
        </Box>
        <Box className="right-home">
          <img
            src="data:image/jpeg;base64,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"
            alt="Modern single-floor house design"
            className="home-image"
          />
        </Box>
      </Box>

      {/* Search Bar */}
      <Box className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                type="text"
                placeholder="Search for properties..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Button type="submit" variant="contained" color="primary" fullWidth>Search</Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Featured Properties */}
      <Box className="featured-properties">
        <Typography variant="h5" gutterBottom>Featured Properties</Typography>
        {isLoading ? (
          <Typography>Loading featured properties...</Typography>
        ) : featuredProperties.length > 0 ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            onChange={handleChange}
            selectedItem={currentSlide}
            infiniteLoop
            autoPlay
            interval={3000}
          >
            {featuredProperties.map((property) => (
              <div key={property.id}>
                <img src={property.image} alt={property.title} />
                <p className="legend">
                  <Link href={`/property/${property.id}`}>{property.title}</Link>
                  <br />
                  {property.description}
                </p>
              </div>
            ))}
          </Carousel>
        ) : (
          <Typography>No featured properties available.</Typography>
        )}
      </Box>

      {/* Testimonials */}
      <Box className="testimonials">
        <Typography variant="h5" gutterBottom>Testimonials</Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box className="testimonial">
                <Typography>{testimonial.text}</Typography>
                <Typography variant="caption">- {testimonial.author}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom Section */}
      <Box className="bottom-heading">
        <Typography variant="body1" align="center">
          Welcome to our company! We are dedicated to providing high-quality
          products/services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box className="call-to-action">
        <Typography variant="h5" align="center" gutterBottom>Contact Us Today!</Typography>
        <Typography align="center" gutterBottom>Get in touch with our team to find your perfect property.</Typography>
        <Button variant="contained" color="secondary">Contact Us</Button>
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
