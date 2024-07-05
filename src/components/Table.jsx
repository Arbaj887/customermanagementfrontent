import React, { useContext, useEffect } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios'
import { FiEdit2 } from "react-icons/fi";
import CustomerContext from '../context/CustomerContext';


function Table() {
  const { customer, setShow, setEditDetail,setAddCustomer,setCustomer} = useContext(CustomerContext);
  
  

  const handleEdit = (detail) => {
    setShow(true);
    setAddCustomer(false)
    
    setEditDetail(detail);
    
    
    
  }

  const handleDelete = async (data) => {
    
    
    const response= await axios.delete(`${process.env.REACT_APP_URL}/delete`, {
      data: { id: data._id }
    })
    setCustomer(response.data)
  }



  useEffect(()=>{
    
    async function getCustomer(){
      try{
       
     const response= await axios.get(process.env.REACT_APP_URL)
     setCustomer(response.data)
     
    }
  catch(err){
    
  }
}


    getCustomer()
  },[setCustomer])

  if (customer === null) {
    return <h2>Loading please wait......</h2>;
  }

  return (
    <div className='table'>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customer.map((detail, index) => (
            <tr key={index}>
              <td>{detail.name}</td>
              <td>{detail.email}</td>
              <td>{detail.phone}</td>
              <td>{detail.dob}</td>
              <td>{detail.address}</td>
              <td>
                <button onClick={() => handleEdit(detail)}><FiEdit2 /></button>
                <button onClick={() => handleDelete(detail)}><RiDeleteBinLine /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

      
      
    </div>
  );
}

export default Table;
