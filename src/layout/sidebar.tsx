import { NavLink, useNavigate } from "react-router-dom";
import  Briefcase from "../assets/briefcase.svg";
import  Home from "../assets/home.svg";
import  ArrowDown from "../assets/arrowdown.svg";
import  User from "../assets/userfriends.svg";
import  Users from "../assets/users.svg";
import  Sack from "../assets/sack.svg";
import  Shake from "../assets/handshake.svg";
import  Piggy from "../assets/piggybank.svg";
import  LoanRequest from "../assets/loan.svg";
import  Check from "../assets/usercheck.svg";
import  karma from "../assets/usertimes.svg";
import  Fees from "../assets/fees.svg";
import  Services from "../assets/services.svg";
import  Transaction from "../assets/transactions.svg";
import  ServiceAccount from "../assets/serviceaccount.svg";
import  Settlement from "../assets/settlement.svg";
import  Report from "../assets/report.svg";
import  Preference from "../assets/preference.svg";
import  FeesPrice from "../assets/feesprice.svg";
import  Audit from "../assets/audit.svg";
import  Systems from "../assets/systems.svg";
import  SignOut from "../assets/signout.svg";
import styles from '../layout/scss/sidebar.module.scss';
import Header from "./header";
 
const SideMenu = ({children}:any) => {
    const menuItem={
      title:'CUSTOMERS',
        items:[{
            path:'/users',
            name:'Users',
            icon:<img src={User} className={styles.icon} alt="horse" />
        },
        {
          path:'/guarantors',
          name:'Guarantors',
          icon:<img src={Users} className={styles.icon} alt="horse" />
        },
        {
          path:'/loans',
          name:'Loans',
          icon:<img src={Sack} className={styles.icon} alt="horse" />
        },
        {
          path:'/decision-models',
          name:'Decision Models',
          icon:<img src={Shake} className={styles.icon} alt="horse" />
        },
        {
          path:'/savings',
          name:'Savings',
          icon:<img src={Piggy} className={styles.icon} alt="horse" />
        },
        {
          path:'/loan-request',
          name:'Loan Request',
          icon:<img src={LoanRequest} className={styles.icon} alt="horse" />
        },
        {
          path:'/white-list',
          name:'Whitelist',
          icon:<img src={Check} className={styles.icon} alt="horse" />
        },
        {
          path:'/karma',
          name:'Karma',
          icon:<img src={karma} className={styles.icon} alt="horse" />
        }],

        



    };

    const businessItem={
      title:'BUSINESS',
        items:[{
            path:'/organization',
            name:'Organization',
            icon:<img src={Briefcase} className={styles.icon} alt="horse" />
        },
        {
          path:'/guarantors',
          name:'Loan Product',
          icon:<img src={Sack} className={styles.icon} alt="horse" />
        },
        {
          path:'/loans',
          name:'Savings Product',
          icon:<img src={Sack} className={styles.icon} alt="horse" />
        },
        {
          path:'/decision-models',
          name:'Fees and Charges',
          icon:<img src={Fees} className={styles.icon} alt="horse" />
        },
        {
          path:'/savings',
          name:'Transaction',
          icon:<img src={Transaction} className={styles.icon} alt="horse" />
        },
        {
          path:'/loan-request',
          name:'Services',
          icon:<img src={Services} className={styles.icon} alt="horse" />
        },
        {
          path:'/white-list',
          name:'Service Account',
          icon:<img src={ServiceAccount} className={styles.icon} alt="horse" />
        },
        {
          path:'/karma',
          name:'Settlement',
          icon:<img src={Settlement} className={styles.icon} alt="horse" />
        },
        {
          path:'/karma',
          name:'Report',
          icon:<img src={Report} className={styles.icon} alt="horse" />
        }
      ],
        

        



    }

    const settingsItem={
      title:'SETTINGS',
        items:[{
            path:'/preference',
            name:'Preference',
            icon:<img src={Preference} className={styles.icon} alt="horse" />
        },
        {
          path:'/guarantors',
          name:'Fees and Pricing',
          icon:<img src={FeesPrice} className={styles.icon} alt="horse" />
        },
        {
          path:'/loans',
          name:'Audit Log',
          icon:<img src={Audit} className={styles.icon} alt="horse" />
        },
        {
          path:'/decision-models',
          name:'Systems Messages',
          icon:<img src={Systems} className={styles.icon} alt="horse" />
        },
      ],

    }

    let navigate = useNavigate();
    const logOut=()=>{
      navigate(
        "/",
    )}

    return ( 
      <div style={{display:''}}>
        <Header/>
        <div style={{display:'flex'}}>
          <div className={styles.parent} >
            <div className={styles.switchDiv}>
               <div><img src={Briefcase} className={styles.icon} alt="horse" /></div>
               <div className={styles.switch}>Switch Organization</div>
               <div><img src={ArrowDown} className={styles.iconArrow} alt="horse" /></div>
            </div>

            <div className={styles.switchDiv}>
               <div><img src={Home} className={styles.icon} alt="horse" /></div>
               <div className={styles.switch}>Dasboard</div>
            </div>

            <div>
             <div className={styles.title}>{menuItem.title}</div>
              {menuItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ background: isActive ? "#39CDCC" : "" })}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.pageName}>{item.name}</div>
              </NavLink>
            )}
            </div>

            <div>
             <div className={styles.title}>{businessItem.title}</div>
              {businessItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ background: isActive ? "#39CDCC" : "" })}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.pageName}>{item.name}</div>
              </NavLink>
            )}
            </div>

            <div>
             <div className={styles.title}>{settingsItem.title}</div>
              {settingsItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ background: isActive ? "#39CDCC" : "" })}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.pageName}>{item.name}</div>
              </NavLink>
            )}
             <div className={styles.signout}><img src={SignOut} className={styles.icon} alt="horse" onClick={logOut} /></div>
            </div>
           

          </div>
          <main className={styles.main}>{children}</main>
        </div>
      </div>  
     );
}
 
export default SideMenu;