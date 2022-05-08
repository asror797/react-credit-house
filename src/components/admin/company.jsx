import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react'
import Loader from '../loader';

function Company() {

   const [company,setCompany] = useState([])
   const [loader,setLoader] = useState(false)


   useEffect(()=>{
      setLoader(true)
     fetch('http://localhost:5000/companies')
         .then(res => res.json())
         .then(data=>{
           if(data[0]) {
              setTimeout(()=>{
                 setLoader(false)
              },1000)
           }
            setCompany(data)
         })
   },[])

   return(
      <>
         <div className="header">
            <p>All Companies</p>
            <Link 
               className='button-60' 
               to="/admin/new-company">
               New company
            </Link>
         </div>

         <ol>
               {
                  company.map(m=>{
                     return(
                        <li 
                           key={m.company_id}>
                           {m.company_name}
                        </li>
                     );
                  })
               }
         </ol>
         {loader && <Loader/>}
      </>
   );
}


export default Company;