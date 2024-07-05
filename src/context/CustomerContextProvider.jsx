import React, { useState } from 'react'
import CustomerContext from './CustomerContext'

function CustomerContextProvider({children}) {
    const [search,setSearch]= useState('')
    const [show,setShow]=useState(false);
    const [editDetail, setEditDetail] = useState(null);
    const [customer,setCustomer]=useState(null)
   
    const [addCustomer,setAddCustomer]=useState(false)

  return (
    <CustomerContext.Provider value={{search,setSearch,show,setShow,customer,setCustomer,addCustomer,setAddCustomer,editDetail, setEditDetail}}>
      {children}
   </CustomerContext.Provider>
  )
}

export default CustomerContextProvider

