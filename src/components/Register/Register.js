import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumberExtension, setPhoneNumberExtension] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleExtensionChange = (event) => {
    setPhoneNumberExtension(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long and contain at least one capital letter, one small letter, and one number.'
      );
      return;
    }

    setErrorMessage('');

    const newUser = {
      username,
      email,
      password,
      address,
      phoneNumber: phoneNumberExtension + phoneNumber,
      dateOfSubscription: '', // This field is empty, needs to be updated if required.
      payingMethod: 'cash' // or 'credit'
    };

    axios.post('http://localhost:5000/users/add', newUser)
      .then((response) => {
        console.log(response.data); // Handle the response data if needed
        navigate('/post-register'); // Redirect to '/post-register' after successful registration
      })
      .catch((error) => {
        console.error(error); // Handle the error if needed
      });
  };

  return (
    <div className={styles['register-form-wrapper']}>
      <div className={styles['register-form']}>
        <div className={styles['welcome-text']}>Register</div>
        <TextField
          id="register-username"
          label="Username"
          variant="standard"
          value={username}
          onChange={handleUsernameChange}
          className={styles['text-field']}
        />
        <TextField
          id="register-email"
          label="Email"
          variant="standard"
          value={email}
          onChange={handleEmailChange}
          className={styles['text-field']}
        />
        <TextField
          id="register-password"
          label="Password"
          variant="standard"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={styles['text-field']}
        />
        <TextField
          id="register-confirm-password"
          label="Confirm Password"
          variant="standard"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={styles['text-field']}
        />
        <div className={styles['phone-number-input']}>
          <div className={styles['phone-number-extension']}>
            <label htmlFor="phone-extension">Extension:</label>
            <select
              id="phone-extension"
              value={phoneNumberExtension}
              onChange={handleExtensionChange}
              className={styles['select-field']}
            >
              <option value="">05X</option>
              <option value="050">050</option>
              <option value="052">052</option>
              <option value="054">054</option>
              <option value="051">051</option>
              <option value="055">055</option>
              <option value="056">056</option>
              <option value="058">058</option>
              <option value="059">059</option>
            </select>
          </div>
          <TextField
            id="register-phone-number"
            label="Phone Number"
            variant="standard"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={styles['text-field']}
          />
        </div>
        <TextField
          id="register-address"
          label="Address"
          variant="standard"
          value={address}
          onChange={handleAddressChange}
          className={styles['text-field']}
        />
        {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
        <Button
          variant="contained"
          className={styles['button']}
          onClick={handleRegister}
        >
          Register
        </Button>
        <Link to="/login" className={styles['link']}>
          Go to home page
        </Link>
      </div>
    </div>
    );
};

export default RegisterPage;
