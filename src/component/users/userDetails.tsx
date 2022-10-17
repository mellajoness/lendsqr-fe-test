import { useNavigate } from "react-router-dom";
import  Back from "../../assets/backarrow.svg";
import styles from '../users/scss/userDetails.module.scss';
import PersonalInfo from "./personalInfo";
const UserDetails = () => {
    
    let navigate = useNavigate();
    const back=()=>{
      navigate(
        "/users",
    )}
    return ( 
        <div className={styles.parent}>
            <div onClick={back} className={styles.backRow}>
               <img src={Back} />
               <div className={styles.back}>Back to User</div>
            </div>

            <div className={styles.buttonRow}>
              <div className={styles.users}>User Details</div>
              <div>
                 <button className={styles.blacklistBtn}>BLACKLIST USER</button>
                 <button className={styles.activateBtn}>ACTIVATE USER</button>
              </div>      
            </div>
            <PersonalInfo/>
           
        </div>
     );
}
 
export default UserDetails;