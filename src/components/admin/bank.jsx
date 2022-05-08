import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react'
import Loader from '../loader';

function Bank() {

   const [banks,setBank] = useState([])
   const [loader , setLoader] = useState(true)

   useEffect(()=>{
      fetch('http://localhost:5000/banks')
         .then(res=>res.json())
         .then(data=>{
            setLoader(false)
            setBank(data)
         })
   })
   return(
      <>
        <div className="header">
            <p>Bank</p>
            <Link 
               className='button-60' 
               to="/admin/new-bank">
               Create Bank
            </Link>
        </div>

        <ul>
           {
              banks.map(m=>{
                 return(
                    <li 
                        key={m.bank_id}>
                        {m.bank_name} ,
                        {m.kredit_duration}yil ,
                        {m.max_kredit}so'm 
                     </li>
                 );
              })
           }
        </ul>
        {loader && <Loader/>}
      </>
   );
}

export default Bank;