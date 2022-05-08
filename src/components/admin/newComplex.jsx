import {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'

function NewComplex() {

   const [company , setCompany] = useState([])
   const [compId,setId] = useState()
   const [complex_name,setName] = useState()
   let navigate = useNavigate()

   useEffect(()=>{
      fetch('http://localhost:5000/companies')
         .then(res=>res.json())
         .then(data=>{
            setCompany(data)
            console.log(data)
         })
   },[])

   return(
      <>

         <Link className='link1' to="/admin/complex"> 👈 Back</Link>
         <div className="content">
            <div className="inputs">
               <h4>Create new Complex</h4>
               <input 
                  onChange={e=>{
                     setName(e.target.value)
                  }}
                  type="text" 
                  placeholder="Complex name" />
               <select 
                  onChange={(e)=>{
                     setId(e.target.value)
                  }}
                  className="select1"
                  defaultValue={5}>

                  <option 
                     disabled 
                     value="5">
                     choose
                  </option>
                  {
                     company.map(m=>{
                        return(
                           <option 
                              key={m.company_id} 
                              value={m.company_id}>
                              {m.company_name}
                           </option>
                        );
                     })
                  }
               </select>
               <button 
                  onClick={()=>{
                     fetch('http://localhost:5000/new-complex',{
                        method:"POST",
                        headers:{
                           "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                           complex_name:complex_name,
                           company_id:compId
                        })
                     })
                     .then(res=>res.json())
                     .then(data=>console.log(data))
                     navigate('/admin/complex')
                  }}
                  className="button-7">
                  Create
               </button>
            </div>
         </div>
      </>
   );
}

export default NewComplex;