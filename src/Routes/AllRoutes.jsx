import {Routes,Route,Link} from "react-router-dom";
import HomePage from "../Pages/HomePage"
import Login from "../Pages/Login";
import SignUpPage from "../Pages/SignUpPage";

function AllRoutes() {
    return <div>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signUp" element={<SignUpPage/>}/>
            </Routes>  
       </div>
  }
  
  export default AllRoutes;