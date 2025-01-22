import React, { useEffect, useState } from "react";
import { addProduct, updateProduct } from "../../services/ProductService";

function ProductForm({ onAddProduct, selectedProduct,setSelectedProduct }) {
  // Function to be called when form will be submitted

  let [product, setProduct] = useState({
    productId: "",
    productName: "",
    description: "",
    productPrice: "",
  });

  const submitHandler = (e) => {
    e.preventDefault()
    addProduct({
      productId: e.target.productId.value,
      productName: e.target.productName.value,
      description: e.target.description.value,
      productPrice: e.target.productPrice.value,
    }).then((data) => {
      onAddProduct();
      setProduct({ productId: "",
        productName: "",
        description: "",
        productPrice: ""})
        
      return data;
    
    })
  };

  useEffect(()=>{
    if (selectedProduct)
        setProduct(selectedProduct)
  },[selectedProduct]);
  // ================================================

//   TO control change in input box
const handlechange=(event)=>{
    // console.log(event.target)
    let{name,value}=event.target;
    // console.log(name+" "+value)
    setProduct((previousProduct)=>{
      console.log(previousProduct)
      return {...previousProduct,[name]:value}
    })
}

// ==============================================================================

// to handle update 
const updateHandler=(e)=>{
  e.preventDefault()
  console.log("update handler called");
  updateProduct(selectedProduct._links.self.href,{
    productName:e.target.productName.value,
    description:e.target.description.value,
    productPrice:e.target.productPrice.value

  }).then((data) => {
    onAddProduct();
    setProduct({
      productId: "",
      productName: "",
      description: "",
      productPrice: "",
    })
    setSelectedProduct(null);
   
  })
  
}



// ================================================
  return (
    <div className="container border border-primary border-3 p-3 my-3">
      <form onSubmit={selectedProduct?updateHandler:submitHandler}>
        <h1 className="bg-primary p-2 text-white text-center">Add Product</h1>
        {/* Product Id */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Product Id
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="productId"
            value={product.productId}
            onChange={handlechange}
          />
        </div>

        {/* Product Name */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="productName"
            value={product.productName}
            onChange={handlechange}
          />
        </div>

        {/* Product Description */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="description"
            value={product.description}
            onChange={handlechange}
          />
        </div>

        {/* Product Price */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Product price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="productPrice"
            value={product.productPrice}
            onChange={handlechange}
          />
        </div>

        {/* Button to submit form  */}
        <button type="submit" className="btn btn-primary" >{selectedProduct?"Update":"Submit"}</button>
      </form>
    </div>
  );
}

export default ProductForm;
