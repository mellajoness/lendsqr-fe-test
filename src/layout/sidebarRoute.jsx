
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import UserDetails from "../component/users/userDetails";
import Users from "../component/users/users";
import SideMenu from "./sidebar";
  
  const SideBarRoute=()=>{
    return (
      <div>
        <SideMenu>
        <Routes>     
            <Route  path='/users' element={<Users/>}/>  
            <Route  path='/users/user-details' element={<UserDetails/>}/>  
            <Route  path='/*' element={<Users/>}/>  
          </Routes>  
        </SideMenu>
      </div>
    );
  }
  
  export default SideBarRoute;
  