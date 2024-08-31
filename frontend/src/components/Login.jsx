import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //backend api logic
    console.log('Form submitted', { email, password, confirmPassword });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Welcome To KVP</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="6+ strong characters"
            required
          />
          <label htmlFor="confirmPassword">Repeat password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="6+ strong characters"
            required
          />
          <div className={styles.options}>
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember for 30 days</label>
            </div>
            <a href="/" className={styles.forgotPassword}>Forgot password?</a>
          </div>
          <button type="submit">Create an account</button>
          <div className={styles.signUp}>
            <p>Sign Up with</p>
            <div className={styles.socialButtons}>
              <button>G</button>
              <button>A</button>
              <button>I</button>
            </div>
          </div>
        </form>
        <p>Don’t have an account? <a href="/">Sign Up</a></p>
      </div>
      <div className={styles.previewBox}>
        <h2>Designed for individuals</h2>
        <p>See the analytics and grow your data for tasks remotely, from anywhere!</p>
        <div className={styles.dashboardPreview}>
        </div>
      </div>
    </div>
  );
};
export default Login;
