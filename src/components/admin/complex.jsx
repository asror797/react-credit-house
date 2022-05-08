import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import Loader from "../loader";


function Complex() {

   const [Complex,setComplex] = useState([])
   const [loader,setLoader] = useState(false)

   useEffect(()=>{
      setLoader(true)
      fetch('http://localhost:5000/complexes')
         .then(res=>res.json())
         .then(data =>{
            setComplex(data)
            if(data[0]) {
               setTimeout(()=>{
                  setLoader(false)
               },1000)
            }
         })
   },[])

   return(
      <>
         <div className="header">
            <p>Complex</p> 
            <Link 
               className="button-60" 
               to="/admin/new-complex">
               Create complex
            </Link>
         </div>

         <ol>
            {
               Complex.map(m=>{
                  return(
                     <li 
                        key={m.complex_id}>
                        <span className="complex5">
                           {m.company_name}
                        </span> ,
                       {m.complex_name}
                     </li>
                  );
               })
            }
         </ol>
         {loader && <Loader/>}
      </>
   );
}

export default Complex;