import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostRegister.module.css';

const PostRegister = () => {
    return (
        <div className={styles['post-register-wrapper']}>
            <div className={styles['post-register-content']}>
                <div className={styles['message']}>
                    Thank you for registering for the service!
                </div>
                <Link to="/login" className={styles['link']}>
                    Go back to home page
                </Link>
            </div>
        </div>
    );
};

export default PostRegister;
