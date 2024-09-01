import styles from './Login.module.css';
import designImage from '../assets/desig.png';
import { useEffect, useRef, useState } from 'react';
import openEye from '../assets/open-eye.svg';
import closeEye from '../assets/close-eye.svg';

const Login = () => {
  const [loginFormVal, setLoginFormvVal] = useState({
    email: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const cnfPassword = useRef();

  useEffect(() => {
    if(showAlert){
      cnfPassword.current.focus()
    }
  },[showAlert])

  const HandleSubmit = (val) => {
    const { id, value } = val.target
    console.log("submit", id, value)
    // setLoginFormvVal({...loginFormVal, [id]:value})
    if (id == 'cnfpassword') {
      setConfirmPassword(value)
    }
    setLoginFormvVal((prevState) => ({
      ...prevState,
      [id]: value
    }))

  }

  const HandlePassCheck = (val) => {
    console.log("insde handl",val)
    const cnfPassword = val.target.value;
    if(cnfPassword != loginFormVal.password){
      setShowAlert(true)
    }else{
      setShowAlert(false)
    }
  }

  const TogglePassword = () => {
    setShowPassword(!showPassword)
  }
  return <div className={styles.loginContainer}>
    <div className={styles.loginBox}>
      <h2>Welcome to KVP</h2>
      <form onSubmit={HandleSubmit} >
        <label htmlFor='email'>Email</label>
        <input
          type="email"
          id="email"
          value={loginFormVal.email}
          onChange={(val) => HandleSubmit(val)}
          placeholder="Enter your email"
          required
        />
        <label htmlFor='password'>Password</label>
        <div className={styles.passwordInputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={loginFormVal.password}
          onChange={(val) => HandleSubmit(val)}
          placeholder="6+ strong characters"
          required
        />
        <span className={styles.eyeIcon}>{showPassword ?
        <img src={openEye} alt="openEye logo" onClick={TogglePassword}/> :
        <img src={closeEye} alt="closeEye logo" onClick={TogglePassword}/>}</span>
        </div>
        
        <label htmlFor='cnfpassword'>Confirm password</label>
        <div className={styles.cnfPassword}>
        <input
          type="password"
          id="cnfpassword"
          className={showAlert ? styles.notMatched : styles.matched}
          value={confirmPassword}
          onChange={(val) => HandleSubmit(val)}
          onBlur={(val) => HandlePassCheck(val)}
          ref={cnfPassword}
          placeholder="6+ strong characters"
          required
        />
        {showAlert && <p>password and confirm password not same</p>}
        </div>
        <div className={styles.rememberMe}>
          <input type='checkbox' id='rememberMe'>
          </input>
          <label for="rememberMe">Remember for 30 days</label>
        </div>
        <div className={styles.forgotPassword}>
          <a href='#'>Forgot password</a>
        </div>
        <button type='submit' className={styles.button}>Login</button>
      </form>
      <div className={styles.signup}>
        <p>Sign Up with</p>
        <div className={styles.socialButtons}>
          <button type="button">G</button>
          <button type="button">A</button>
          <button type="button">I</button>
        </div>
      </div>
      <p>Don’t have an account? <a href="./registration.html">Sign Up</a></p>

    </div>
    <div className={styles.preview}>
      <h2>Designed for individuals</h2>
      <p>See the analytics and grow your data for tasks remotely, from anywhere!</p>

      <div className={styles.imageBox}>
        <img src={designImage} alt="Laptop with Dashboard" />
      </div>
    </div>
  </div>

}

export default Login