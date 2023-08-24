import {Routes,Route,Link} from "react-router-dom";


function AllRoutes() {
    return <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>  
       </div>
  }
  
  export default AllRoutes;