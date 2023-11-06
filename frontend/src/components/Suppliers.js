import React from 'react';
import "../styles/Suppliers.css";
import {NavLink} from "react-router-dom";

const Suppliers = () => {
  return (
    <>
      <div className='Suppliers'>

        <div className='Header'>
        <div className='title'>Suppliers</div>
        <button type="button" className="btn btn-primary">Add Supplier +</button>
        </div>

        <div className='list-heading-supplier'>
            <div>No.</div>
            <div>Supplier Name</div>
            <div>Mobiler Number</div>
            <div>Address</div>
            <div>Actions</div>
        </div>

        <div className="list-supplier">
            <div className='list-column-supplier'>
            <div>1</div>
            <div style={{textAlign: "start"}}>X</div>
            <div>9876543210</div>
            <div>ABCDE FGHIJK LMNOP</div>
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

export default Suppliers
