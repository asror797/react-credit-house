import { Link , useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'

function NewHouse() {

   const [complexes,setComplex] = useState([])
   const [countRoom ,setRoom] = useState()
   const [PriceRoom , setPrice] = useState()
   const [complexId,setId] = useState()
   const navigate = useNavigate()

   useEffect(()=>{
      fetch('http://localhost:5000/complexes')
         .then(res=>res.json())
         .then(data=>setComplex(data))
   },[])
   return(
      <>

         <Link 
            className="link1" 
            to="/admin/house"> 
            👈 Back
         </Link>
         <div className="content">
            <div className="inputs">
               <h4>New House Create</h4>
               <input 
                  onChange={e=>{
                     setRoom(e.target.value)
                  }}
                  type="number"
                  placeholder="House rooms"
                  min="1" 
                  max="6" />
               <input 
                  onChange={e=>{
                     setPrice(e.target.value)
                  }}
                  type="number"  
                  placeholder="House price" />
               <select 
                  onChange={e=>{
                     setId(e.target.value)
                  }}
                  className="select1" 
                  defaultValue={11}>
                  <option value="11">choose</option>
                 {
                    complexes.map(m=>{
                       return(
                          <option 
                              value={m.complex_id}
                              key={m.complex_id}>
                              {m.complex_name}
                           </option>
                       );
                    })
                 }
               </select>
               <button 
                  onClick={()=>{

                     fetch('http://localhost:5000/new-house',{
                        method:"POST",
                        headers:{
                           "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                           house_room:countRoom,
                           house_price:PriceRoom,
                           complex_id:complexId  
                        })
                        
                     })
                     .then(res=>res.json())
                     .then(data=>{
                        console.log(data)
                     })
                     navigate('/admin/house')
                  }}
                  className="button-7">
                  Create House
               </button>
            </div>
         </div>
      </>
   );
}


export default NewHouse;