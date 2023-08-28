import {Routes,Route,Link} from "react-router-dom";
import HomePage from "../Pages/HomePage"
import Login from "../Pages/Login";

function AllRoutes() {
    return <div>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>  
       </div>
  }
  
  export default AllRoutes;