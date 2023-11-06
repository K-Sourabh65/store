import React from 'react'
import "../styles/Menubar.css";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import Logout from './Logout';
import Dashboard from "./Dashboard";
import Products from './Products';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Customers from './Customers';
import Suppliers from './Suppliers';

const Menubar = () => {
  
  return (
    <>
    
    <div class="menubar">

        <div class="side"> 
            <ul>
                <li id="item-title">My Store</li>
                <hr></hr>
                <NavLink className="nav-link" to="/dashboard"><li class="item" ><i class="fa-solid fa-house"></i>Dashboard</li></NavLink>
                <NavLink className="nav-link" to="/products"><li class="item"><i class="fa-solid fa-cart-shopping"></i>Products</li></NavLink>
                <NavLink className="nav-link" to=""><li class="item"><i class="fa-solid fa-house"></i>Warehouse</li></NavLink>
                <NavLink className="nav-link" to=""><li class="item"><i class="fa-solid fa-cart-shopping"></i>Bills</li></NavLink>
                <NavLink className="nav-link" to="/suppliers"><li class="item"><i class="fa-solid fa-house"></i>Suppliers</li></NavLink>
                <NavLink className="nav-link" to="/customers"><li class="item"><i class="fa-solid fa-cart-shopping"></i>Customers</li></NavLink>
                <NavLink className="nav-link" to=""><li class="item"><i class="fa-solid fa-house"></i>Profile</li></NavLink>
            </ul>
        </div>

        <div class="main">

            <div class="top">
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div class="container-fluid">
                      <h3 class="navbar-brand">E-Inventory</h3>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                      </button>
    
                        <div class="collapse navbar-collapse" id="mynavbar">
    
                            <form class="d-flex " >
                            <input class="form-control me-2" type="text" placeholder="Search your Product here.."/>
                            <button class="search" type="button">Search</button>
                            </form>
    
                            <div class="ml-auto">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <NavLink className="nav-link" to="/logout"><i class="fa-solid fa-right-from-bracket" ></i></NavLink>   
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>   
            </div>

            <div class="main-body">
                <Routes>
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/suppliers" element={<Suppliers />} />
                  <Route path="/customers" element={<Customers />} />
                </Routes>
            </div>
        </div>
    </div>

    </>
  )
}

export default Menubar
