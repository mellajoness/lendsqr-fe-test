import Table from "../shared/table";
import UserCard from "../shared/userscard";
import styles from '../shared/scss/usercard.module.scss';
const Users = () => {
    return ( 
        <div className={styles.container} >
            <div>
                <div className={styles.users}>Users</div>
                <UserCard/>
            </div>
            <Table/>
        </div>
     );
}
 
export default Users;