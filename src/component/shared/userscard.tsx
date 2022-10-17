import styles from '../shared/scss/usercard.module.scss';
import  UserCount from "../../assets/usersCount.svg";
import  ActiveUser from "../../assets/activeUser.svg";
import  UserLoan from "../../assets/userLoan.svg";
import  UserSaving from "../../assets/userSavings.svg";
const UserCard = () => {
    return ( 
        <div className={styles.parent}>
           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <img src={UserCount} className={styles.icon} alt="horse" />
               <div className={styles.user}>Users</div>
               <div className={styles.count}>2,453</div>
             </div>
           </div>

           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <img src={ActiveUser} className={styles.icon} alt="horse" />
               <div className={styles.user}>Active Users</div>
               <div className={styles.count}>2,453</div>
             </div>
           </div>
           
           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <img src={UserLoan} className={styles.icon} alt="horse" />
               <div className={styles.user}>Users with Loans</div>
               <div className={styles.count}>12,453</div>
             </div>
           </div>

           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <img src={UserSaving} className={styles.icon} alt="horse" />
               <div className={styles.user}>Users with Savings</div>
               <div className={styles.count}>102,452</div>
             </div>
           </div>
        </div>
     );
}
 
export default UserCard;