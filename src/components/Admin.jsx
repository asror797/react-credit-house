import { Link , Routes , Route, Outlet} from "react-router-dom";

function Admin() {
   return(
      <>
         <div className="dashboard">
            <div className="sidebar">
               <Link className="Link" to="/" >👈 Back</Link>
               <Link className="Link" to="/admin/company">🏢 Company</Link>
               <Link className="Link" to="/admin/complex">🏬 Complex</Link>
               <Link className="Link" to="/admin/house">🏠 House</Link>
               <Link className="Link" to="/admin/bank">🏦 Bank</Link>
            </div>
            <div className="workboard">
               <Outlet/>
            </div>
         </div>
      </>
   );
}

export default Admin;