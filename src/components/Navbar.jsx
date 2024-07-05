import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import CustomerContext from '../context/CustomerContext';

function Navbar() {
  const { search, setSearch, setAddCustomer, customer, setCustomer } = useContext(CustomerContext);

  useEffect(() => {
    const findCustomer = async () => {
      if (search === '') {
        try {
          const response = await axios.get(process.env.REACT_APP_URL);
          setCustomer(response.data);
        } catch (err) {
          console.log(err);
        }
      } else if (customer !== null) {
        const filtered = customer.filter(cust =>
          cust.name.toLowerCase().includes(search.toLowerCase())
        );
        setCustomer(filtered);
      }
    };

    findCustomer();
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className='navbar'>
      <div>
        <h2>Customer Management</h2>
      </div>
      <div>
        <input 
          type='text' 
          value={search} 
          placeholder='Search customer' 
          onChange={(e) => setSearch(e.target.value)} // Update search state
        />
        <button onClick={() => setAddCustomer(true)}>
          Add Customer
        </button>
      </div>
    </div>
  );
}

export default Navbar;
