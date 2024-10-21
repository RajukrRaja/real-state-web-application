// Property.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './property.css';

const Property = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('distance');
  const [showModal, setShowModal] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({
    propertyName: '',
    propertyType: '',
    propertyPrice: '',
    propertyLocation: '',
    propertyImage: ''
  });
  const [propertyData, setPropertyData] = useState(() => {
    const storedData = localStorage.getItem('propertyData');
    return storedData ? JSON.parse(storedData) : [
      { id: 1, name: 'Property 1', distance: 5, imageSrc: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg', price: '$200,000', type: 'House', location: 'City Center' },
      { id: 2, name: 'Property 2', distance: 8, imageSrc: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg', price: '$300,000', type: 'Apartment', location: 'Suburbs' },
      { id: 3, name: 'Property 3', distance: 3, imageSrc: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg', price: '$250,000', type: 'Condo', location: 'Downtown' },
    ];
  });
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    localStorage.setItem('propertyData', JSON.stringify(propertyData));
  }, [propertyData]);

  const handleListProperty = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPropertyDetails(prevState => ({
          ...prevState,
          propertyImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setError('Please upload a valid image file.');
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newProperty = {
        id: propertyData.length + 1,
        name: propertyDetails.propertyName,
        distance: 0, // Distance should be calculated separately
        imageSrc: propertyDetails.propertyImage,
        price: propertyDetails.propertyPrice,
        type: propertyDetails.propertyType,
        location: propertyDetails.propertyLocation
      };
      setPropertyData(prevProperties => [...prevProperties, newProperty]);
      setShowModal(false);
      resetForm();
    }
  };

  const validateForm = () => {
    const { propertyName, propertyType, propertyPrice, propertyLocation, propertyImage } = propertyDetails;
    if (!propertyName || !propertyType || !propertyPrice || !propertyLocation || !propertyImage) {
      setError('All fields are required.');
      return false;
    }
    if (isNaN(propertyPrice.replace(/[$,]/g, ''))) {
      setError('Price must be a valid number.');
      return false;
    }
    setError('');
    return true;
  };

  const resetForm = () => {
    setPropertyDetails({
      propertyName: '',
      propertyType: '',
      propertyPrice: '',
      propertyLocation: '',
      propertyImage: ''
    });
  };

  const handleDelete = (id) => {
    const updatedProperties = propertyData.filter(property => property.id !== id);
    setPropertyData(updatedProperties);
  };

  const filteredProperties = propertyData.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProperties = filteredProperties.sort((a, b) => {
    if (sortBy === 'distance' || sortBy === 'price') {
      return a[sortBy] - b[sortBy];
    } else {
      return a[sortBy].localeCompare(b[sortBy]);
    }
  });

  return (
    <div className="property-container">
      <h1 className="property-heading">Properties</h1>
      <div className="property-controls">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="property-search"
        />
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="property-sort"
        >
          <option value="distance">Distance</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="location">Location</option>
        </select>
        <button className="list-property-button" onClick={handleListProperty}>List Your Property</button>
      </div>
      <div className="property-list">
        {sortedProperties.map((property, index) => (
          <div
            key={property.id}
            className="property-item"
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <img src={property.imageSrc} alt={property.name} className="property-image" />
            <div className="property-details">
              <h2 className="property-name">{property.name}</h2>
              <p className="property-type">Type: {property.type}</p>
              <p className="property-location">Location: {property.location}</p>
              <p className="property-distance">Distance: {property.distance} miles</p>
              <p className="property-price">Price: {property.price}</p>
              <button className="property-button" onClick={() => addToCart(property)}>Buy</button>
              <button className="property-delete" onClick={() => handleDelete(property.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>List Your Property</h2>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label>Property Name:</label>
              <input type="text" name="propertyName" value={propertyDetails.propertyName} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Property Type:</label>
              <input type="text" name="propertyType" value={propertyDetails.propertyType} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input type="text" name="propertyPrice" value={propertyDetails.propertyPrice} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input type="text" name="propertyLocation" value={propertyDetails.propertyLocation} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Upload Image:</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
            <div className="list-button">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
