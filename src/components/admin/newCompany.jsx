import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react'
import Loader from '../loader';

function NewCompany() {

   let [CompanyName,setName] = useState()
   const [loader,setLoader] = useState(false)
   let navigate = useNavigate()
   return(
      <>
         <Link className='link1' to="/admin/company"> 👈 Back</Link>
         <div className="content">
            <div className="inputs">
               <h4>Create new Company</h4>
               <input 
                  onChange={(e)=>{
                     console.log(e.target.value)
                     setName(e.target.value)
                  }}
                  type="text" 
                  placeholder="Company name" />
               <button 
                  onClick={()=>{
                     setLoader(true)
                     ;(async()=>{
                        let response = await fetch('http://localhost:5000/new-company',{
                           method:"POST",
                           headers:{
                              "Content-Type":"application/json"
                           },
                           body:JSON.stringify({
                              company_name:CompanyName
                           })
                        });
                        response = await response.json()

                        console.log(response)
                        if(response[0]) {
                           setLoader(false)
                        }else{
                           console.log('Loader...');
                        }
                     })()
                     navigate('/admin/company')

                  }}
                  className="button-7">
                  Create
               </button>
            </div>
         </div>
         {loader && <Loader/>}
      </>
   )
}

export default NewCompany;