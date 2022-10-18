import styles  from './scss/header.module.scss'
import {ReactComponent as LendsqrIcon} from "../assets/logo.svg";
import  Search from "../assets/search.svg";
import  Profile from "../assets/profileImg.svg"
import  DropDown from "../assets/profiledrop.svg"
import  Bell from "../assets/bell.svg";
import { useState } from 'react';

const Header = () => {
        const [username,setUsername]=useState('');
    return ( 
        <div className={styles.parent}>
            <div className={styles.logoDiv}>
             <LendsqrIcon  className={styles.logo} height="25" />{" "}
            </div>

            <div className={styles.content}>
              <div className={styles.searchDiv}>
                <input className={styles.input} onChange={e => setUsername(e.target.value)} type='search'  value={username}  placeholder='Search for something'/>
                <div className={styles.imgSearch}><img src={Search} className={styles.iconSearch} alt="horse" /></div>
              </div>

              <div className={styles.searchDiv}>
                 <div className={styles.docs}>Docs</div>
                 <div><img src={Bell} className={styles.bellIcon} alt="horse" /></div>
                 <div><img src={Profile} className={styles.profileIcon} alt="horse" /></div>
                 <div className={styles.name}>Adedeji</div>
                 <div><img src={DropDown} className={styles.iconSearch} alt="horse" height="20" /></div>
              </div>  
            </div>
              
            
        </div>
     );
}
 
export default Header;