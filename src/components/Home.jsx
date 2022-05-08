import Navbar from './Navbar';
import {useEffect,useState} from 'react'
import Loader from './loader';


function Home() {

   const [buildings,setBuildings] = useState([]);
   const [complexes,setComplex] = useState([])
   const [CompanyName , setCompName] = useState('Tanlanmagan')
   const [ComplexName,setComplexName] = useState('Tanlanmagan')
   const [room,setRooms] = useState([])
   const [rooms , setRoom] = useState('0')
   const [price,setPrice] = useState('0')
   const [value,setValue] = useState(45)
   const [banks,setBanks] = useState([])
   const [loader,setLoader] = useState(false)

   useEffect(()=>{
      fetch('http://localhost:5000/companies')
         .then(res => res.json())
         .then(data => {
            setBuildings(data)
         })
   },[])

   const selectCompany = (e) => {
      ;(async()=>{
         try {
            let response = await fetch('http://localhost:5000/company-complex',{
               method:"POST",
               headers:{
                  "Content-Type":"application/json"
               },
               body:JSON.stringify({
                  company_id:e.target.value
               })
            })
            response = await response.json()
            setComplex(response)
            setRooms([])
            setRoom('0')
            setComplexName('tanlanmagan')
            setPrice('0')
            setValue(45)
         } catch (error) {
            console.log(error)
         }
      })()
      buildings.map(m=>{
         if(m.company_id == e.target.value) {
            setCompName(m.company_name)
         }
      })
   }


   return(
      <> 
         <Navbar/>
         <div className="container">
            <div className="selects">
               <select
                  onChange={selectCompany}
                  defaultValue={value} >
                  <option 
                     disabled
                     value={value}>
                     choose
                  </option>
                  {
                     buildings.map(m=>{
                        return(
                           <option 
                              value={m.company_id} 
                              key={m.company_id}>
                              {m.company_name}
                           </option>
                        );
                     })
                  }
               </select>
               <select 
                  defaultValue={value}
                  onChange={(e)=>{
                     setComplexName(e.target.value)
                     let complex_id = 1
                     complexes.map(m=>{
                        if(m.complex_name == e.target.value) {
                           complex_id = m.complex_id
                           console.log(complex_id)
                        }
                        console.log(complex_id);
                     })
                     fetch('http://localhost:5000/complex-house',{
                        method:"POST",
                        headers:{
                           "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                           complex_id:complex_id
                        })
                     })
                     .then(res=>res.json())
                     .then(data=>{
                        setRooms([])
                        setRooms(data)
                        console.log(data)
                     })
                  }}
                  id="5">
                  <option 
                     disabled 
                     value={value}  
                     key={989}>
                     choose
                  </option>
                  {
                     complexes.map(m=>{
                        return(
                           <option 
                              value={m.complex_name} 
                              key={m.complex_id}>
                              {m.complex_name}
                           </option>
                        );
                     })
                  }
               </select>
               <select 
                  defaultValue={value}
                  onChange={(e)=>{
                     console.log(e.target.value)
                     let selectedRoom = room.find(m=>m.house_id ==e.target.value)
                     setRoom(selectedRoom.house_room)
                     setPrice(selectedRoom.house_price)
                  }}
                  id="5">
                  <option  
                     className='rooms'
                     disabled 
                     value={45}>
                     choose
                  </option>
                  {
                     room.map(m=>{
                        return(
                           <option 
                              className='rooms' 
                              key={m.house_id} 
                              value={m.house_id}>
                              {m.house_room} xona
                           </option>
                        );
                     })
                  }
               </select>

               <select  

                  onChange={(e)=>{
                     
                     
                    if(!rooms=='0') {
                        setLoader(true)
                        fetch('http://localhost:5000/get-credit',{
                           method:"POST",
                           headers:{
                              "Content-Type":"application/json"
                           },
                           body:JSON.stringify({
                              kredit_duration:e.target.value,
                              max_kredit:price
                           })
                        })
                        .then(res=>res.json())
                        .then(data=>{
                           setBanks(data)
                           console.log(data);
                           setTimeout(setLoader(false),900)
                           console.log(data)
                        })
                    }else{
                       console.log('Not Selected Rooms');
                    }
                  }}
                  defaultValue={value} 
                  id={9}>
                  <option  disabled id={45}  value={45}>choose</option>
                  <option value={10}>10 yil</option>
                  <option value={15}>15 yil</option>
                  <option value={20}>20 yil</option>
               </select>
            </div>

            <div className="btn">
               <button 
                  onClick={()=>{
                     window.location.reload()
                  }}
                  className='button-7'>Reset All</button>
            </div>

            <div className="views">
               <div className="row1">
                  <p>
                     <span 
                        className='span1'>
                        Company:
                     </span> 
                     <span>  </span>
                     {CompanyName}
                  </p>
                  <p>
                     <span 
                        className='span1'>
                        Complex:
                     </span> 
                     <span>  </span>
                     {ComplexName}
                  </p>
                  <p>
                     <span 
                        className='span1'>
                        Room:
                     </span> 
                     <span>  </span>
                     {rooms} xona
                  </p>
                  <p>
                     <span 
                        className='span1'>
                        Price:
                     </span> 
                     <span>  </span>
                     {price} so'm
                  </p>
               </div>
               <div className="row2">
                  <p>
                     <span className="span1">
                        Bank Name: 
                     </span>
                     <span>  </span>
                      {banks[0]?.bank_name}
                  </p>
                  <p>
                     <span className="span1">
                        Max Credit: 
                     </span>
                     <span>  </span>
                      {banks[0]?.max_kredit} so'm
                  </p>
                  <p>
                     <span className="span1">
                        Credit Duration: 
                     </span>
                     <span>  </span>
                      {banks[0]?.kredit_duration} yil
                  </p>
                  <p>
                     <span className="span1">
                        Month Payment: 
                     </span>
                     <span>  </span>
                      {banks[0]?.monthpayment} so'm
                  </p>
               </div>

               {/* <ol>
                  {
                     banks.map(m=>{
                        return(
                           <li key={m.bank_id}>{m.bank_name} , {m.max_kredit} so'm oyiga: {m.monthpayment} so'm</li>
                        );
                     })
                  }
               </ol> */}
            </div>
         </div>
         { loader && <Loader/>}
      </>
   );
}

export default Home;