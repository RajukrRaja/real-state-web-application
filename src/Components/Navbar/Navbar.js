import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { ThemeProvider, keyframes, createGlobalStyle } from 'styled-components';
import Sidebar from '../sidebar/sidebar'; // Import the Sidebar component
import { FaBars, FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

// Global styles for the whole application
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.3s ease;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
`;

// Light and Dark themes
const lightTheme = {
  background: '#fff',
  color: '#333',
  hover: '#ddd',
  primary: '#007bff',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  background: '#222',
  color: '#fff',
  hover: '#333',
  primary: '#4a90e2',
  shadow: 'rgba(255, 255, 255, 0.1)',
};

// Navbar Component
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle between light and dark modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle scroll for scroll indicator and Navbar behavior
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav isScrolled={scrollPosition > 50}>
        <Hamburger onClick={toggleSidebar}>
          <FaBars />
        </Hamburger>
        <NavMenu>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Dropdown>
            <NavLink to="/services">Services</NavLink>
            <DropdownContent>
              <NavLink to="/services/web-design">Web Design</NavLink>
              <NavLink to="/services/seo">SEO</NavLink>
              <NavLink to="/services/marketing">Marketing</NavLink>
            </DropdownContent>
          </Dropdown>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/more">More</NavLink>
        </NavMenu>
        <NavIcons>
          <ThemeToggle onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <SearchForm onSubmit={(e) => { e.preventDefault(); console.log(searchQuery); }}>
            <SearchInput 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Search..." 
            />
          </SearchForm>
          <Profile>
            <FaUserCircle />
            <ProfileDropdown>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/settings">Settings</NavLink>
              <LogoutButton>Logout</LogoutButton>
            </ProfileDropdown>
          </Profile>
        </NavIcons>
      </Nav>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <ScrollIndicator scroll={scrollPosition} />
    </ThemeProvider>
  );
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const wiggle = keyframes`
  0%, 100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
`;

const smoothWidth = keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${({ scroll }) => (scroll / (document.body.scrollHeight - window.innerHeight)) * 100}%;
  }
`;

// Styled components for layout and styles
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ isScrolled, theme }) => (isScrolled ? `0 2px 10px ${theme.shadow}` : 'none')};
  transition: all 0.3s ease;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;

    &.active {
      background: ${({ theme }) => theme.primary};
      color: #fff;
    }

    &:hover {
      background: ${({ theme }) => theme.hover};
      transform: scale(1.05);
      box-shadow: 0px 4px 10px ${({ theme }) => theme.shadow};
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide the nav links on smaller screens */
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 1cm;
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    display: block; /* Show the hamburger icon on smaller screens */
  }

  &:hover {
    animation: ${wiggle} 0.5s ease infinite;
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background: ${({ theme }) => theme.background};
  z-index: 1002;
  animation: ${slideInLeft} 0.5s ease;
`;

const NavIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  min-width: 160px;
  box-shadow: 0px 8px 16px ${({ theme }) => theme.shadow};
  z-index: 1;
  flex-direction: column;
  border-radius: 8px;

  a {
    color: ${({ theme }) => theme.color};
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background: ${({ theme }) => theme.primary};
      color: #fff;
    }
  }

  ${Dropdown}:hover & {
    display: flex;
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
    margin-top:0.8cm;


`;

const SearchForm = styled.form`
  display: flex;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-top:0.8cm;
`;

const Profile = styled.div`
  position: relative;
  font-size: 1.5rem;
  cursor: pointer;
    margin-top:0.8cm;

  &:hover div {
    display: flex;
  }
`;

const ProfileDropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.background};
  padding: 0.5rem;
  flex-direction: column;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  border-radius: 8px;
  animation: ${slideDown} 0.3s ease, ${fadeIn} 0.3s ease;

  a {
    color: ${({ theme }) => theme.color};
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
      background: ${({ theme }) => theme.primary};
      color: #fff;
      transform: scale(1.1);
    }
  }
`;

const LogoutButton = styled.button`
  background: red;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: darkred;
  }
`;

const ScrollIndicator = styled.div`
  height: 5px;
  background: ${({ theme }) => theme.primary};
  width: ${({ scroll }) => (scroll / (document.body.scrollHeight - window.innerHeight)) * 100}%;
  animation: ${smoothWidth} 0.3s ease;
  position: fixed;
  top: 0;
  z-index: 999;
`;

export default Navbar;
