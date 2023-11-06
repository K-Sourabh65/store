import React, {createContext, useReducer, useContext} from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menubar from './components/Menubar';
// import Logout from './components/Logout';
// import Dashboard from "./components/Dashboard";
// import Products from './components/Products';
import { initialState, reducer } from '../src/reducer/UseReducer';

//Context API
export const UserContext = createContext();

const Routing = () => {

  const {state, dispatch} = useContext(UserContext);

  if(state) {
    return (
      <>
        <Menubar />
      </>
    )
  }
  else {
    return (
      <>
        <Navbar />
  
        <Routes>
            <Route path="/" element={<Home />} /> 
  
            <Route path="/login" element={<Login />} />
              
            <Route path="/register" element={<Register />} />
  
          </Routes>
      </>
      
    )
  }
} 


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Routing />
      </UserContext.Provider>

    </>
         
  );
}

export default App;
