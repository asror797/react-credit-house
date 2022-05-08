import {Link,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react'
import Loader from '../loader';


function NewBank() {

   const [bankName,setName] = useState()
   const [kredit,setKredit] = useState()
   const [duration,setDuration] = useState()
   const [loader , setLoader] = useState(false)
   let navigate = useNavigate()

   const CreateBank = () => {
      
      ;(async()=>{
         try {
            let response = await fetch('http://localhost:5000/new-bank',{
               method:"POST",
               headers:{
                  "Content-Type":"application/json"
               },
               body:JSON.stringify({
                  bank_name:bankName,
                  max_kredit:kredit,
                  kredit_duration:duration
               })
            })
            response = await response.json()
         } catch (error) {
            console.log(error)
         }
      })()
   }

   return(
      <>
         <Link className='link1' to="/admin/bank"> 👈 Back</Link>
         <div className="content">
            <div className="inputs">
               <h4>Create new Bank</h4>
               <input 
                  onChange={e=>{
                     setName(e.target.value)
                  }}
                  type="text" 
                  placeholder="Bank name" />
                  <input 
                     onChange={e=>{
                        setKredit(e.target.value)
                     }}
                     type="number"
                     className='number-input'
                     placeholder="Max credit"
                      />
               <select 
                  onChange={e=>{
                     setDuration(e.target.value)
                  }}
                  defaultValue={5} 
                  className='select1'>
                  <option 
                     disabled 
                     id={5}
                     value={5}>
                     choose
                  </option>
                  <option value="10">10 yil</option>
                  <option value="15">15 yil</option>
                  <option value="20">20 yil</option>
               </select>
               <button 
                  onClick={()=>{
                     setLoader(true)
                     CreateBank()
                     navigate('/admin/bank')
                  }}
                  className="button-7">
                  Create
               </button>
            </div>
         </div>
         {loader && <Loader/>  }

      </>
   );
}

 export default NewBank;