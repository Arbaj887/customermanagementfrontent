import React,{useContext, useState} from 'react'
import CustomerContext from '../context/CustomerContext';
import axios from 'axios'

function Editcustomer({data}) {
   
     const {setCustomer,setShow}=useContext(CustomerContext)
     const [editName,setEditName]=useState(data.name);
     const [editEmail ,setEditEmail]=useState(data.email)
     const [editPhone ,setEditPhone]=useState(data.phone)
     const [editDOB, setEditDOB] = useState(
      data.dob ? new Date(data.dob).toISOString().split('T')[0] : ''
    );
     const [editAddress ,setEditAdress]=useState(data.address)


    const editCustomer=async (e)=>{
       e.preventDefault();
        const response=  await axios.put(`${process.env.REACT_APP_URL}/edit`,{
       name: editName,email:editEmail,phone:editPhone,dob:editDOB,address:editAddress, id:data._id
       })
      
      setCustomer(response.data)

    }

    const cancel=(e)=>{
        e.preventDefault();
        setShow(false)

    }

  return (

    <div className='editform'>
      <form   onSubmit={editCustomer}>
        <h2>Edit Customer</h2>
        <p>Update the customer details.</p>
        <div className='E1'>
        <label> Name </label>
        <input type='text' value={editName} placeholder='Enter Name Here' onChange={(e)=>{setEditName(e.target.value)}} />
        
        </div>
        <div className='E1'>   
        <label> Email</label>
        <input type='email' value={editEmail} placeholder='Enter Email' onChange={(e)=>{setEditEmail(e.target.value)}}/>
        
        </div>
        <div className='E1'>
        <label> Phone</label>
        <input type='number' value={editPhone} placeholder='Enter Phone Number' onChange={(e)=>{setEditPhone(e.target.value)}}/>
        
        </div>
        <div className='E1'>
        <label> Date of Birth</label>
        <input type='date' value={editDOB} placeholder='MM/DD/YY' onChange={(e)=>{setEditDOB(e.target.value)}}/>
        
        </div>
        <div className='E1'>
        <label> Address </label>
        <input type='text' value={editAddress} placeholder='Enter Address' onChange={(e)=>{setEditAdress(e.target.value)}}/>
        
        </div>
        <div>
            
            <button onClick={cancel} className='cancle'> Cancel</button>
            <button type='submit' className='save'> Save</button>
        </div>
      </form>
    </div>
  )
}

export default Editcustomer
