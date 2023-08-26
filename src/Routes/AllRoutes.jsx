import {Routes,Route,Link} from "react-router-dom";
import HomePage from "../Pages/HomePage"

function AllRoutes() {
    return <div>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
            </Routes>  
       </div>
  }
  
  export default AllRoutes;