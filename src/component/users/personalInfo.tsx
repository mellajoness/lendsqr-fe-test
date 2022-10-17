import styles from '../users/scss/personalInfo.module.scss';
import  Avatar from "../../assets/avatar.svg";
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import InfoDetails from './infoDetail';
import { GET_SERVICE } from '../../services/backend';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const PersonalInfo = () => {
    const [rating, setRating] = useState(0);
    const [value, setValue] = useState(0);
    const [loading,setLoading,]=useState(false);
    const [mismatchError,setMismatchError]=useState('');
    const [color, setColor] = useState("green");
    const [users,setUsers]=useState({});
    let data:any= localStorage.getItem('userData');
    let userData:any=JSON.parse(data)

    useEffect(()=>{
      getUsersById()
    },[])

  const getUsersById=async()=>{ 
    let id:any=userData.id
      const endpoint = `/api/v1/users/${id}`;
      console.log('endpoint',endpoint)
      setLoading(!loading)
        try {
          const response = await GET_SERVICE(endpoint)
          .then(response => response.json())
          .then(data=> {
             
            setLoading(loading)
          if(data)
             {
              setUsers(data)
             }
          else
            {
              setMismatchError(data.message)
            }
        })
       }
          catch (e:any) {
            setLoading(loading)
            setMismatchError('Kindly check internet connections')
            return e.response;
            }
  }; 

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleRating = (rate: number) => {
      setRating(rate)
    }
    
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)
    return ( 
      <div>
        <div className={styles.parent}>
            <div className={styles.avatarRow}>
              <img src={Avatar} className={styles.icon} alt="horse" />
              <div className={styles.nameDiv}>
                 <div className={styles.name}>{userData.userName}</div>
                 <div className={styles.code}>{userData.accountNumber}</div>
              </div>
              <div className={styles.lines}/>

              <div className={styles.nameDiv}>
                 <div className={styles.userTier}>User's Tier</div>
                 <div style={{marginTop:'0.7em'}}>
                 <Rating
                   onClick={handleRating}
                   onPointerEnter={onPointerEnter}
                   onPointerLeave={onPointerLeave}
                   onPointerMove={onPointerMove}
                   iconsCount={3}
                   size={27}
                 />
                 </div>
              </div>
              <div className={styles.lines}/>

              <div className={styles.nameDiv}>
                 <div className={styles.name}>₦{userData.accountBalance}</div>
                 <div className={styles.code}>9912345678/Providus Bank</div>
              </div>
              <div className={styles.lines}/>
            </div>

            <Box sx={{ width: '100%' }} className={styles.tabParent}>
             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  variant="scrollable" scrollButtons="auto" TabIndicatorProps={{style: {backgroundColor: "#39CDCC",textColor:'secondary'}  }}>
                 <Tab label="General Details" {...a11yProps(0)} className={styles.tab} />
                 <Tab label="Documents" {...a11yProps(1)} className={styles.tab}/>
                 <Tab label="Bank Details" {...a11yProps(2)} className={styles.tab} />
                 <Tab label="Loan" {...a11yProps(3)} className={styles.tab} />
                 <Tab label="Savings" {...a11yProps(4)} className={styles.tab}/>
                 <Tab label="App and Sysyem" {...a11yProps(5)} className={styles.tab}/>
             </Tabs>
             </Box>
             <TabPanel value={value} index={0}>
                <InfoDetails/>
             </TabPanel>
             <TabPanel value={value} index={1}>
                Item Two
             </TabPanel>
             <TabPanel value={value} index={2}>
                Item Three
             </TabPanel>
             <TabPanel value={value} index={3}>
                Item four
             </TabPanel>
             <TabPanel value={value} index={4}>
                Item five
             </TabPanel>
             <TabPanel value={value} index={5}>
                Item six
             </TabPanel>
            </Box>      
        </div>



</div>
     );
}
 
export default PersonalInfo;