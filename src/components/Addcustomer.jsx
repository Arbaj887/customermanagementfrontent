import React,{useContext, useState} from 'react'
import CustomerContext from '../context/CustomerContext';
import axios from 'axios'

function Addcustomer() {

  
    const {setCustomer,setAddCustomer,customer}=useContext(CustomerContext)
    const [addName,setaddName]=useState('');
    const [addEmail ,setaddEmail]=useState('')
    const [addPhone ,setaddPhone]=useState('')
    const [addDOB ,setaddDOB]=useState('')
    const [addAddress ,setaddAdress]=useState('')


   const addCustomer=async (e)=>{
      e.preventDefault();
      
      const response = await axios.post(`${process.env.REACT_APP_URL}/add`,{
        name:addName,email:addEmail,phone:addPhone,dob:addDOB,address:addAddress 
       })
       setCustomer([...customer,response.data])

   }

   const cancel=(e)=>{
       e.preventDefault();
       setAddCustomer(false)

   }


  return (
    <div className='editform'>
       <form  onSubmit={addCustomer}>
        <h2>Add Customer</h2>
        <p>Enter the details for the new customer.</p>
        <div className='E1'>
        <label> Name </label>
        <input type='text' value={addName} placeholder='Enter Name Here' onChange={(e)=>{setaddName(e.target.value)}} required/>
        
        </div>
        <div className='E1'>   
        <label> Email</label>
        <input type='email' value={addEmail} placeholder='Enter Email' onChange={(e)=>{setaddEmail(e.target.value)}} required/>
        
        </div>
        <div className='E1'>
        <label> Phone</label>
        <input type='number' value={addPhone} placeholder='Enter Phone Number' onChange={(e)=>{setaddPhone(e.target.value)}} required/>
        
        </div>
        <div className='E1'>
        <label> Date of Birth</label>
        <input type='date' value={addDOB} placeholder='MM/DD/YY' onChange={(e)=>{setaddDOB(e.target.value)}} required/>
        
        </div>
        <div className='E1'>
        <label> Address </label>
        <input type='text' value={addAddress} placeholder='Enter Address' onChange={(e)=>{setaddAdress(e.target.value)}} required/>
        
        </div>
        <div>
            
            <button onClick={cancel} className='cancle'> Cancel</button>
            <button  type='submit' className='save'> Save</button>
        </div>
      </form>
    </div>
  )
}

export default Addcustomer
