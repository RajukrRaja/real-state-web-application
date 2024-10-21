import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaEnvelope, FaLock, FaFacebook, FaGoogle } from 'react-icons/fa';

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
  background-color: #ffffff;
  border-radius: 15px;
  padding: 50px 40px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 450px;
  margin: 50px auto;
  text-align: center;
  animation: ${fadeIn} 0.5s ease forwards;

  @media (max-width: 600px) {
    padding: 30px 20px;
    margin: 20px auto;
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
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SocialButton = styled.button`
  background: ${({ bg }) => bg || '#ccc'};
  color: #fff;
  border: none;
  padding: 12px 15px;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
  font-size: 14px;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 600px) {
    margin: 0;
    width: 100%;
    font-size: 12px;
  }
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
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
  background-color: #ffffff;
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
`;

const Tooltip = styled.span`
  visibility: hidden;
  background-color: #333333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s;

  ${InputGroup}:hover & {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 600px) {
    top: -30px;
    font-size: 10px;
    padding: 4px;
  }
`;

const PasswordStrength = styled.div`
  height: 5px;
  border-radius: 3px;
  background-color: ${({ strength }) => {
    switch (strength) {
      case 'weak':
        return '#e74c3c';
      case 'medium':
        return '#f1c40f';
      case 'strong':
        return '#2ecc71';
      default:
        return '#ccc';
    }
  }};
  margin-top: -15px;
  margin-bottom: 15px;
  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    margin-top: -12px;
    height: 4px;
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
`;

const SuccessMessage = styled.div`
  color: #2ecc71;
  font-size: 16px;
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease forwards;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: #333333;

  input {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }

  a {
    color: #fda085;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    font-size: 12px;

    input {
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }
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
`;

// Helper function to evaluate password strength
const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  switch (strength) {
    case 0:
    case 1:
      return 'weak';
    case 2:
      return 'medium';
    case 3:
      return 'strong';
    default:
      return 'unknown';
  }
};

// RegistrationForm Component
const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (!agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }

    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAgreeToTerms(false);
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Register</Title>
      <SocialButtons>
        <SocialButton bg="#3b5998"><FaFacebook /> Facebook</SocialButton>
        <SocialButton bg="#db4437"><FaGoogle /> Google</SocialButton>
      </SocialButtons>
      <InputGroup>
        <Icon><FaUser /></Icon>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </InputGroup>
      <InputGroup>
        <Icon><FaEnvelope /></Icon>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </InputGroup>
      <InputGroup>
        <Icon><FaLock /></Icon>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Tooltip>Password must be at least 6 characters long.</Tooltip>
      </InputGroup>
      <PasswordStrength strength={getPasswordStrength(password)} />
      <InputGroup>
        <Icon><FaLock /></Icon>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      </InputGroup>
      <Terms>
        <input
          type="checkbox"
          checked={agreeToTerms}
          onChange={() => setAgreeToTerms(!agreeToTerms)}
          required
        />
        I agree to the <a href="#">Terms and Conditions</a>
      </Terms>
      {error && <Error>{error}</Error>}
      {loading && <Loader />}
      {success && <SuccessMessage>Registration successful!</SuccessMessage>}
      <Button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </Form>
  );
};

export default RegistrationForm;
