import { useEffect, useState,CSSProperties } from 'react';
import styles from '../shared/scss/table.module.scss';
import dropstyles from '../shared/scss/dropdown.module.scss';
import  Filter from "../../assets/filter.svg";
import  ThreeDot from "../../assets/threedot.svg";
import  View from "../../assets/view.svg";
import  Activate from "../../assets/activate.svg";
import  Blacklist from "../../assets/blacklist.svg";
import { GET_SERVICE } from '../../services/backend';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";
import moment from 'moment';
import _ from 'lodash';
import { paginate } from './paginate';
import Pagination from './pagination';
import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


const override: CSSProperties = {
    display: "block",
    marginTop: "0 auto",
    borderColor: "red",
  };
 
const Table = () => {
    const [loading,setLoading,]=useState(false);
    const [mismatchError,setMismatchError]=useState('');
    const [color, setColor] = useState("green");
    const [users,setUsers]=useState([]);
    const [disableNextPage,setDisableNextPage]=useState(false);
    const [pageSize,setPageSize]=useState(10);
    const [dropDownValue,setDropDownValue]=useState(10);
    const [modal_center,setModal_center]=useState(false);
    const [currentPage,setCurrentPage]=useState(1)
    const [sortColumn,setSortColumn]=useState({path:'userId',order:'asc'});
    let navigate = useNavigate();
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [date,setDate]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [dropCount,setDropCount]=useState([
      {id:1, year:'10'},
      {id:2, year:'20'},
      {id:3, year:'50'},
    ])
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [anchorE2, setAnchorE2] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickModal = (event:any) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const open2 = Boolean(anchorE2);
  const id2 = open2 ? 'simple-popover' : undefined;
   
    useEffect(()=>{
        getUsers()
      },[])

    const getUsers=async()=>{ 
        const endpoint = `/api/v1/users`;
        console.log('endpoint',endpoint)
        setLoading(!loading)
          try {
            const response = await GET_SERVICE(endpoint)
            .then(response => response.json())
            .then(data=> {
                console.log('users',data)
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
 
    const changeValue=(e:any)=>{
        setDropDownValue(e.target.value)
        console.log(e.target.value);
    }

    const handlePageChange=(page:any)=>{
        setCurrentPage(page)
    }
    
    const pagesCount=Math.ceil(users.length/pageSize);
    
    const handleNextpage=()=>{
        setCurrentPage(currentPage+1)
    }

    const handlePrevpage=()=>{
        if(pagesCount===currentPage && users.length===0) {
          setCurrentPage(currentPage-2)
        }
        setCurrentPage(currentPage-1)
    }

    const viewDetails=(user:object)=>{
        localStorage.setItem('userData',JSON.stringify(user))
        navigate(
            "/users/user-details",
        )
    }
    const tog_center=()=>{
        setModal_center(!modal_center)           
    }
    

    //    const sorted=_.orderBy(users,[sortColumn.path],[sortColumn.order]);
    const filtered=paginate(users,currentPage,dropDownValue)
      

    return ( 
        <div>
         <div  className={styles.parent}>
         <div className="table-responsive">  
          <div style={{display:'flex',justifyContent:'center',marginTop:'1em'}}><DotLoader color={color} loading={loading} cssOverride={override} size={20}/></div>    
         <table className="table">
          <thead>
           <tr>
              <th className={styles.tablehead} scope="col" onClick={handleClick}>
                ORGANIZATION
                <img src={Filter} className={styles.icon} alt="horse" />
              </th>

              <th className={styles.tablehead} scope="col">
                USERNAME
                <img src={Filter} className={styles.icon} alt="horse" />
              </th>

              <th className={styles.tablehead} scope="col">
                EMAIL
                <img src={Filter} className={styles.icon} alt="horse" />
              </th>

              <th className={styles.tablehead} scope="col">
                PHONE NUMBER
                <img src={Filter} className={styles.icon} alt="horse" />
              </th>

              <th className={styles.tablehead} scope="col">
                DATE JOINED
                <img src={Filter} className={styles.icon} alt="horse" />
              </th>
              <th className={styles.tablehead} scope="col">
                STATUS
                <img src={Filter} className={styles.icon} alt="horse" />
              </th>
           </tr>
          </thead>
          <tbody>

          {filtered.map((user:any,index:any) =>
           <tr  key={index}>
             <td className={styles.tabledata}>{user.orgName}</td>
             <td className={styles.tabledata}>{user.userName}</td>
             <td className={styles.tabledata}>{user.email}</td>
             <td className={styles.tabledata}>{user.phoneNumber}</td>
             <td className={styles.tabledata}>{moment(user.createdAt).format('D MMM YYYY')}</td> 
             <td className={styles.tabledata}><span className={styles.status}>active</span></td>
             <td className={styles.tabledata}>
                <div className={dropstyles.dropdownnnn}>
                <img className={dropstyles.dropbtnttt}   onClick={handleClickModal} src={ThreeDot} style={{float:'right',paddingTop:'12px',cursor:'pointer'}}/>
                <Popover
        id={id2}
        open={open2}
        anchorEl={anchorE2}
        elevation={1}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <Typography sx={{ p: 2 }}>
        <div className={styles.popoverTwo}>
            <div className={dropstyles.dropdownContentvvv}>
                 <a onClick={()=>viewDetails(user)} style={{display:'flex',alignItems:'center',padding:'0.5em',cursor:'pointer'}}>
                    <img src={View} style={{height:'17px'}}/>
                    <div style={{paddingLeft:'1em',color:'#218359',fontSize:'0.8em'}}>View Details</div>
                 </a>

                 <a style={{display:'flex',alignItems:'center',padding:'0.5em',cursor:'pointer'}}>
                    <img src={Blacklist} style={{height:'17px'}}/>
                    <div style={{paddingLeft:'1em',color:'#218359',fontSize:'0.8em'}}>Blacklist User</div>
                 </a>

                 <a style={{display:'flex',alignItems:'center',padding:'0.5em',cursor:'pointer'}}>
                    <img src={Activate} style={{height:'17px'}}/>
                    <div style={{paddingLeft:'1em',color:'#218359',fontSize:'0.8em'}}>Activate User</div>
                 </a>
            </div>
        </div>

      </Typography>
      </Popover>  
                </div>           
             </td>
          </tr>
          )}
         </tbody>
         </table>
         </div>
         </div>
         

         <div className={styles.row}>
         <div className={styles.dropdownRow}>   
         <select  onChange={changeValue} className={styles.select}>
            {dropCount.map(year=>
            <option value={year.year}>{year.year}</option>
         )} 
         </select> 
         <div className="text-md-right ms-auto" style={{paddingLeft:'0.5em'}}>
             Showing out of <span className="primary-color">{users.length}</span> 
         </div>
         </div>

         <Pagination
              itemsCount={users.length}
              pageLength={filtered.length}
              pageSize={dropDownValue}
              onPageChange={handlePageChange}
              onNextpage={handleNextpage}
              onPrevpage={handlePrevpage}
              currentPage={currentPage}
              disableNextPage={disableNextPage}
        />


 
            
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <Typography sx={{ p: 2 }}>
        <div className={styles.popover}>
         <div className={styles.nameDiv}>
          <div className={styles.poptitle}>ORGANIZATION</div>
          <select name="cars" id="cars" className={styles.selectpop}>
            <option value="volvo" disabled>Select</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
         </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>USERNAME</div>
            <input className={styles.inputpop} onChange={e => setUsername(e.target.value)} type='text' value={username}  placeholder='Username'/>
          </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>EMAIL</div>
            <input className={styles.inputpop} onChange={e => setEmail(e.target.value)} type='text' value={email}  placeholder='Email'/>
          </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>DATE</div>
            <input className={styles.inputpop} onChange={e => setDate(e.target.value)} type='date' value={date}  placeholder='Email'/>
          </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>Phone Number</div>
            <input className={styles.inputpop} onChange={e => setPhoneNumber(e.target.value)} type='text' value={phoneNumber}  placeholder='Phone Number'/>
          </div>

          <div className={styles.nameDiv}>
          <div className={styles.poptitle}>STATUS</div>
          <select name="cars" id="cars" className={styles.selectpop}>
            <option value="volvo" >Select</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
         </div>

         <div className={styles.btnDiv}>
           <button className={styles.btnOne}>Reset</button>
           <button className={styles.btnTwo}>Filter</button>
         </div>
        </div>

      </Typography>
      </Popover>   


      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <Typography sx={{ p: 2 }}>
        <div className={styles.popover}>
         <div className={styles.nameDiv}>
          <div className={styles.poptitle}>ORGANIZATION</div>
          <select name="cars" id="cars" className={styles.selectpop}>
            <option value="volvo" disabled>Select</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
         </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>USERNAME</div>
            <input className={styles.inputpop} onChange={e => setUsername(e.target.value)} type='text' value={username}  placeholder='Username'/>
          </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>EMAIL</div>
            <input className={styles.inputpop} onChange={e => setEmail(e.target.value)} type='text' value={email}  placeholder='Email'/>
          </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>DATE</div>
            <input className={styles.inputpop} onChange={e => setDate(e.target.value)} type='date' value={date}  placeholder='Email'/>
          </div>

          <div className={styles.nameDiv}>
            <div className={styles.poptitle}>Phone Number</div>
            <input className={styles.inputpop} onChange={e => setPhoneNumber(e.target.value)} type='text' value={phoneNumber}  placeholder='Phone Number'/>
          </div>

          <div className={styles.nameDiv}>
          <div className={styles.poptitle}>STATUS</div>
          <select name="cars" id="cars" className={styles.selectpop}>
            <option value="volvo" >Select</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
         </div>

         <div className={styles.btnDiv}>
           <button className={styles.btnOne}>Reset</button>
           <button className={styles.btnTwo}>Filter</button>
         </div>
        </div>

      </Typography>
      </Popover>  


        </div>
     </div>
     );
}
 
export default Table;