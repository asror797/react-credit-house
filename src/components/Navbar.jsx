import {Link} from 'react-router-dom';
import logo from './../assets/FindHouse.png'

function Navbar() {
   return(
      <>
        <div className="navbar">
            <div className="container">
               <div className="navbar__itm">
                  <img 
                     src={logo} 
                     alt="logo image here" />
                  <Link 
                     className='button-8' 
                     to="/admin">
                     Admin
                  </Link>
               </div>
            </div>
        </div>
      </>
   );
}

export default Navbar;