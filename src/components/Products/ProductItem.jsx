import React, { useEffect, useState } from "react";
import { deleteProduct, getProductById } from "../../services/ProductService";
import { getCategories } from "../../services/CategoryService";


function ProductItem({ productName, ProductDescription, productPrice, product_link, onSelectProduct, onDeleteProduct }) {

  let [categories,setCetegories]=useState([])

  const fetchCategories=async()=>{
    setCetegories(await getCategories())  
  }
  useEffect(()=>{
    fetchCategories();
  },[])


  // =================================================

  const onSelectUpdate = async (link) => {
    // console.log(link);
    let product = await getProductById(link)
    onSelectProduct(product)

  }


  //================================================================
  // function to delete product
  const onSelectDelete = async (product_id_link) => {
    const deletedProduct = await deleteProduct(product_id_link)
    onDeleteProduct();

  }
  //==============================================================

  return (
    <div>

      <div className="col">
        <div class="card ">
          <div class="card-body">
            <img src={product_link + "/image"} class="card-img-top" alt="..." />

            <h5 class="card-title">ProductName: {productName}</h5>
            <p class="card-text">Description: {ProductDescription}</p>
            <p class="card-text">Price: {productPrice}</p>

            {/* Showing Category Start */}

            <div class="dropdown mb-3">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
               Select Category
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                {categories.map((category)=>{

                  return(<li><button class="dropdown-item" type="button">Action</button></li>)
                })}
              </ul>
            </div>

            {/* Showing category End */}

            {/* Updata Button */}
            <button className="btn btn-success" onClick={() => { onSelectUpdate(product_link) }}>Update</button>
            {/* Delete Button */}
            <button className="btn btn-danger" onClick={() => { onSelectDelete(product_link) }}> Delete</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductItem;
