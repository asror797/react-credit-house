
import {Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import Company from './components/admin/company';
import NewCompany from './components/admin/newCompany';
import Complex from './components/admin/complex';
import Bank from './components/admin/bank';
import NewComplex from './components/admin/newComplex'
import NewBank from './components/admin/newBank';
import House from './components/admin/house';
import NewHouse from './components/admin/newhouse';


function App() {
  return (
   <>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="admin" element={<Admin />}>
          <Route path="company" element={<Company />}/>
          <Route path='new-company' element={<NewCompany />}/>
          <Route path="complex" element={<Complex />}/>
          <Route path="new-complex" element={<NewComplex />}/>
          <Route path='house' element={<House/>}/>
          <Route path='new-house' element={<NewHouse/>}/>
          <Route path="bank" element={<Bank />}/>
          <Route path="new-bank" element={<NewBank />}/>
        </Route>
     </Routes>
   </>
  );
}

export default App;
