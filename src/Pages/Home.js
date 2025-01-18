import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePageImage from '../Image/Home.jpg';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  Button,
  Typography,
  Box,
  Link,
  TextField,
  Grid,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/featured');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeaturedProperties(data || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsLoading(false);
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

  const testimonials = [
    { text: '"Amazing service! Found my dream home in no time."', author: 'John Doe' },
    { text: '"The platform is user-friendly and the property listings are comprehensive."', author: 'Jane Smith' },
    { text: '"Highly recommend! Their team was very helpful throughout the entire process."', author: 'Peter Jones' },
  ];

  return (
    <Box className="home-container" sx={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <Box className="main-container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <Box className="left-home" sx={{ maxWidth: '50%' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Find Faster, Find Smarter
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: '1.5rem', color: 'gray' }}>
            Discover your perfect property with our advanced search and intuitive platform.
          </Typography>
          <Link href="./Property" underline="none">
            <Button variant="contained" color="primary" size="large">
              Find More ➡
            </Button>
          </Link>
        </Box>
        <Box className="right-home">
  <img 
    src={HomePageImage} 
    alt="Modern single-floor house design"
    style={{ maxWidth: '100%', borderRadius: '8px' }}
  />
</Box>
      </Box>

      {/* Search Bar */}
      <Box className="search-bar" sx={{ marginBottom: '3rem', textAlign: 'center' }}>
        <form onSubmit={handleSearchSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} md={8}>
              <TextField
                fullWidth
                type="text"
                placeholder="Search for properties..."
                value={searchQuery}
                onChange={handleSearchChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Featured Properties */}
      <Box className="featured-properties" sx={{ marginBottom: '3rem' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Featured Properties
        </Typography>
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : featuredProperties.length > 0 ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            swipeable
          >
            {featuredProperties.map((property) => (
              <Card key={property.id} sx={{ maxWidth: '80%', margin: 'auto', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    <Link href={`/property/${property.id}`} underline="hover">
                      {property.title}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        ) : (
          <Typography>No featured properties available.</Typography>
        )}
      </Box>

      {/* Testimonials */}
      <Box className="testimonials" sx={{ marginBottom: '3rem' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Testimonials
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  padding: '1.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: 1,
                  textAlign: 'center',
                  backgroundColor: '#fafafa',
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>
                  {testimonial.text}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  - {testimonial.author}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box className="call-to-action" sx={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Contact Us Today!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '1.5rem' }}>
          Get in touch with our team to find your perfect property.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Us
        </Button>
      </Box>

      {/* Social Media Icons */}
      <Box className="social-icons" sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
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
