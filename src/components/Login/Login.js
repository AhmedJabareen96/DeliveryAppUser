import React, { useContext, useState } from 'react';
import { Button, TextField, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const { username, setUsername } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLoginButton = () => {
        setLoading(true);
        setError(null);

        axios.post("http://localhost:5000/users/loginEmail", {
            email: username,
            password: password
        }).then(() => {
            setLoading(false);
            setUsername(username);
            localStorage.setItem("username", username);
            navigate('/');
        }).catch(err => {
            setLoading(false);
            setError('Invalid email/password');
        });
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className={styles['login-form-wrapper']}>
            <div className={styles['login-form']}>
                <div className={styles['welcome-text']}>Welcome to Hourly!</div>
                <p>Shopping made easier!</p>
                <TextField
                    id="loginm-username"
                    label="Email"
                    variant="standard"
                    className={styles['text-field']}
                    onChange={handleUsernameChange}
                />
                <TextField
                    id="loginm-password"
                    label="Password"
                    variant="standard"
                    type="password"
                    className={styles['password-field']}
                    onChange={handlePasswordChange}
                />
                <Button
                    variant="contained"
                    className={styles['button']}
                    onClick={handleLoginButton}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Login'}
                </Button>
                {error && <div className={styles['error-message']}>{error}</div>}
                <p>
                    Forgot your password? <Link to="/forgot-password">Reset here</Link>
                </p>
                <p>
                    Don't have an account? <Link to="/register">Click here to register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
