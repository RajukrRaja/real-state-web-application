import React, { useState } from 'react';
import './Contact.css'

function Contact() {
  // State variables to store form data
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [purpose, setPurpose] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { fullName, mobileNumber, purpose });
    // Reset form fields after submission
    setFullName('');
    setMobileNumber('');
    setPurpose('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', color: '#333' , marginTop: '4cm'}}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#007bff' }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="fullName" style={{ marginBottom: '5px', display: 'block', color: '#007bff' }}>Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', color: '#333' }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="mobileNumber" style={{ marginBottom: '5px', display: 'block', color: '#007bff' }}>Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', color: '#333' }}
            pattern="[0-9]{10}"
            required
          />
          <small style={{ display: 'block', marginTop: '5px', color: '#999' }}>Format: 10 digits</small>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="purpose" style={{ marginBottom: '5px', display: 'block', color: '#007bff' }}>Purpose:</label>
          <textarea
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', color: '#333' }}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
