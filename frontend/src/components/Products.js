import React , {useState, useEffect} from 'react'
import "../styles/Products.css";
import {NavLink} from "react-router-dom";


const Products = () => {

  const [show, setShow] = useState(false);

  const [productData, setProductData] = useState([]);

  const callProductPage = async () => {
    try{
      const res = await fetch('/products', {
        method: "GET",
        headers: {
            Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials:"include"
        
      });

      const data = await res.json();
      console.log(data);
      setProductData(data);

      if(!res.status === 200 ) {
        const error = new Error(res.error);
        throw error;
      }

    } catch(err) {
      console.log(err);
    }

  }

  useEffect(() => {  
    callProductPage();
  }, []);


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

    if(res.status === 420 || !data) {
      window.alert("Product Already Exist");
    }
    else {
      window.alert("Product Added Successful!");
      callProductPage();
    }
    setProduct({
      pid: "", 
      pname: "", 
      pcategory: "", 
      pquantity: "", 
      pprice: ""
    });
    setShow(!show);
  };


  let delproduct = "";
  /*Delete Products */
  const deleteProduct = async (event) => {
      console.log(delproduct);
      const res = await fetch("/deleteProduct", {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        delproduct
      })
    });

    if(res.status === 422) {
      window.alert("Failed!");
    }
    else {
      window.alert("Product Deleted Successful!");
      callProductPage();
    }
  }
  

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

        {productData.map((element, i) => (
            <div className='list-column-product'>
              <div>{i+1}</div>
              <div style={{textAlign: "start"}}>{element.pname}</div>
              <div>{element.pid}</div>
              <div>{element.pcategory}</div>
              <div>{element.pquantity}</div>
              <div>{element.pprice}</div>
              <div className='Action'>
              <NavLink to="#" ><img src='https://cdn-icons-png.flaticon.com/512/2951/2951136.png' alt='' width="25"/></NavLink> 
              <NavLink to="#" onClick={() => { delproduct = element.pid; deleteProduct(element.pid)}} ><img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt=''  width="20"/></NavLink>
              </div>
            </div>
          ))} 
        </div>
      </div>
    
    </>
  )
}



export default Products
