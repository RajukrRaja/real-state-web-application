// List.jsx
import React, { useState } from 'react';
import './list.css';

const ListPropertyDialog = ({ onClose, onAddProperty }) => {
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertyPrice, setPropertyPrice] = useState('');
  const [propertyLocation, setPropertyLocation] = useState('');
  const [propertyImage, setPropertyImage] = useState('');

  const handleSubmit = () => {
    // Perform form validation if needed
    const newProperty = {
      name: propertyName,
      type: propertyType,
      price: propertyPrice,
      location: propertyLocation,
      image: propertyImage
    };
    onAddProperty(newProperty);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>List Your Property</h2>
        <div>
          <label>Name of Your Property:</label>
          <input type="text" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} />
        </div>
        <div>
          <label>Type of Property:</label>
          <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={propertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={propertyLocation} onChange={(e) => setPropertyLocation(e.target.value)} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={propertyImage} onChange={(e) => setPropertyImage(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ListPropertyDialog;
