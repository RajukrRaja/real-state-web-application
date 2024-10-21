import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Register from '../Components/Register/Register'; // Adjust import path as needed
import Login from './Login'; // Adjust import path as needed
import './UserProfile.css'; // Import the CSS file for styling

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>; // Display loading message while user data is being fetched
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      {/* Include other user information */}
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // Add other user properties here
  }),
};

export { UserProvider, UserProfile };
