
import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import CustomerContext from './context/CustomerContext';
import Editcustomer from './components/Editcustomer';
import Addcustomer from './components/Addcustomer';


function App() {
  const {editDetail,addCustomer,show}=useContext(CustomerContext)
  return (
    <div className="App">
     <Navbar/>
     <Table/>
     {editDetail && show && <Editcustomer data={editDetail} />}
      {addCustomer && <Addcustomer/>}
    </div>
  );
}

export default App;
