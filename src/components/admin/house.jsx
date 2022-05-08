import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import Loader from "../loader";

function House() {

   const [houses,setHouse] = useState([])
   const [loader,setLoader] = useState(false)
   useEffect(()=>{
      setLoader(true)
      fetch('http://localhost:5000/houses')
      .then(res=>res.json())
      .then(data=>{
         if(data[0]) {
            setTimeout(()=>{
               setLoader(false)
            },1000)
         }
         setHouse(data)
      })
   },[])
   return(
      <>
         <div className="header">
            <p>Houses</p>
            <Link 
               className="button-60" 
               to="/admin/new-house">
               New House
            </Link>
         </div>
         <ol>
               {
                  houses.map(m=>{
                     return(
                        <li 
                           key={m.house_id}>
                           {m.complex_name}, 
                           <span className="roomspan">
                              {m.house_room}
                           </span> 
                           xona
                        </li>
                     );
                  })
               }
            </ol>
            {loader && <Loader/>}
      </>
   );
}

export default House;