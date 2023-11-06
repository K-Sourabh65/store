import React from 'react';
import "../styles/Customers.css";
import {NavLink} from "react-router-dom";

const Customers = () => {
  return (
    <>
      <div className='Customers'>

        <div className='Header'>
        <div className='title'>Customers</div>
        <button type="button" className="btn btn-primary">Add Customer +</button>
        </div>

        <div className='list-heading-customer'>
            <div>No.</div>
            <div>Customer Name</div>
            <div>Mobiler Number</div>
            <div>Actions</div>
        </div>

        <div className="list-customer">
            <div className='list-column-customer'>
            <div>1</div>
            <div style={{textAlign: "start"}}>X</div>
            <div>9876543210</div>
            <div className='Action'>
            <NavLink to="#"><img src='https://cdn-icons-png.flaticon.com/512/2951/2951136.png' alt='' width="25"/></NavLink> 
                <NavLink to="#"><img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt=''  width="20"/></NavLink>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Customers
