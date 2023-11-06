import React , {useState} from 'react'
import "../styles/Products.css";
import {NavLink} from "react-router-dom";


const Products = () => {

  const [product, setProduct] = useState({
    pid: "", 
    pname: "", 
    pcategory: "", 
    pquantity: "", 
    pprice: ""
  });

  let name, value;

  const handleInputs = (event) => {
    console.log(event);
    name = event.target.name;
    value = event.target.value;

    setProduct({ ...product, [name]: value });
  };

  const PostData = async (event) => {
    event.preventDefault();

    const {pid, pname, pcategory, pquantity, pprice} = product;

    const res = await fetch("/addProduct", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        pid, pname, pcategory, pquantity, pprice
      })
    });

    const data = await res.json();

    if(res.status === 422 || !data) {
      window.alert("Failed!");
    }
    else {
      window.alert("Product Added Successful!");
    }

  };
  

  const [show, setShow] = useState(false);

  return (
    <>
    <div className='Products'>

        <div className='Header'>
          <div className='title'>Products</div>
          <button type="button" className="btn btn-primary" onClick={() => setShow(!show)}>Add Product +</button>
        </div>
        
        {
          show &&
            <div class="add-product-form">
              <form method="POST" class="product-form">
                <input id="pname" name="pname" type="text" placeholder="Product name" value={product.pname} onChange={handleInputs}/>
                <input id="pid" name="pid" type="text" placeholder="Product ID" value={product.pid} onChange={handleInputs}/>
                <select id="pcategory" name="pcategory" placeholder='Category' value={product.pcategory} onChange={handleInputs}>
                <option selected disabled>Category</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </select>
                <input id="pquantity" name="pquantity" type="number" placeholder="Quantity" value={product.pquantity} onChange={handleInputs}/>
                <input id="pprice" name="pprice" type="number" placeholder="Price" value={product.pprice} onChange={handleInputs}/>
                <input id="add-product-btn" name="add" type="submit" value="Add" onClick={PostData}/>
              </form>
            </div>
        }

        <div className='list-heading-product'>
          <div>No.</div>
          <div>Product Name</div>
          <div>Product ID</div>
          <div>Category</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Actions</div>
        </div>
        
        <div className="list-product">
            <div className='list-column-product'>
              <div>1</div>
              <div style={{textAlign: "start"}}>X</div>
              <div>Product ID</div>
              <div>Category</div>
              <div>In-Stock</div>
              <div>Price</div>
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



export default Products
