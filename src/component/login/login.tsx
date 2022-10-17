import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LendsqrIcon from "../../assets/logo.svg";
import  LoginIcon from "../../assets/pablo.svg";
import styles  from './scss/login.module.scss'
const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    let navigate = useNavigate();
    const proceed=()=>{
      navigate(
        "/users",
    )}
    return ( 
            <div className={styles.parent}>    
              <div className={styles.brandParent}>
                <div className={styles.logo}><img src={LendsqrIcon}  alt="horse" /></div>
                <div className={styles.icondiv}>
                 <img src={LoginIcon} className={styles.iconBg} alt="horse" />
                </div>
              </div>

              <div className={styles.formparent}>  
                  <div className={styles.welcome}>Welcome!</div>
                  <div className={styles.enter}>Enter details to login.</div>

                  <div className={styles.nameDiv}>
                     <input className={styles.input} onChange={e => setUsername(e.target.value)} type='text' value={username}  placeholder='Username'/>
                  </div>
                  <div className={styles.a}>
                     <input className={styles.inputTwo} type='password' onChange={e => setPassword(e.target.value)}  value={password} placeholder='Password'/>
                     <div className={styles.show}>show</div>
                  </div> 
                  <div className={styles.forgot}>Forgot password</div>
                  <button onClick={proceed} className={styles.btn}>Log In</button>
              </div>
            </div>
     );
}
 
export default Login;