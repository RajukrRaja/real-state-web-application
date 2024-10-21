import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Register from '../Components/Register/Register';
import './Login.css' // Adjust the path based on your folder structure

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// Styled-components
const Form = styled.form`
  background-color: white;
  border-radius: 15px;
  padding: 50px 40px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 550px;
  margin: 50px auto;
  text-align: center;
  animation: ${fadeIn} 0.5s ease forwards;

  @media (max-width: 600px) {
    padding: 30px 20px;
    margin: 20px auto;

  }

  @media (max-width: 400px) {
    padding: 20px 15px;
    margin: 15px auto;
      max-width: 250px;
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  color: #333333;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 600px) {
    font-size: 22px;

    &:after {
      width: 40px;
      height: 2px;
    }
  }

  @media (max-width: 400px) {
    font-size: 20px;

    &:after {
      width: 30px;
      height: 2px;
    }
  }
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #cccccc;

  @media (max-width: 600px) {
    left: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px 12px 45px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 8px;

  color: #333333;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #fda085;
    outline: none;
    box-shadow: 0 0 8px rgba(253, 160, 133, 0.5);
  }

  &:invalid {
    animation: ${shake} 0.3s;
  }

  @media (max-width: 600px) {
    padding: 10px 15px 10px 40px;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    padding: 8px 10px 8px 35px;
    font-size: 12px;
  }
`;

const Error = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin: 5px 0 0 0;
  text-align: left;
  animation: ${shake} 0.3s;

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  color: #fff;
  border: none;
  padding: 12px 20px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f6d365;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 10px 18px;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    padding: 8px 15px;
    font-size: 12px;
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #fda085;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
    border-width: 3px;
  }

  @media (max-width: 400px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`;

// Toggle Switch Styled-Component
const SwitchButton = styled.button`
  background-color: red;
  border: none;
  width: 200px;
  color: #fda085;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #f6d365;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    color: #ff8b5f;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    font-size: 14px;
    width: 160px; // Adjusted width for smaller screens
  }

  @media (max-width: 400px) {
    font-size: 12px;
    width: 140px; // Further adjusted width
  }
`;

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2cm;

  @media (max-width: 600px) {
    margin-top: 1cm;
  }

  @media (max-width: 400px) {
    margin-top: 0.5cm;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between Login and Register

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail('');
      setPassword('');
    }, 2000);
  };

  return (
    <>
      <ToggleSwitch>
        <SwitchButton onClick={() => setIsRegistering((prev) => !prev)}>
          {isRegistering ? 'Switch to Login' : 'Switch to Register'}
        </SwitchButton>
      </ToggleSwitch>

      {isRegistering ? (
        <Register /> // Render the Register component if isRegistering is true
      ) : (
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <InputGroup>
            <Icon>
              <FaEnvelope />
            </Icon>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Icon>
              <FaLock />
            </Icon>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          {error && <Error>{error}</Error>}
          {success && <div>Login successful!</div>}

          <ButtonWrapper>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader /> : 'Login'}
            </Button>
          </ButtonWrapper>
        </Form>
      )}
    </>
  );
};

export default LoginForm;
