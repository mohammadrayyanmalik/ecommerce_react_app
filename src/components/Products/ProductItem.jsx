import React from "react";
import { deleteProduct, getProductById } from "../../services/ProductService";

function ProductItem({ productName, ProductDescription, productPrice,product_link,onSelectProduct,onDeleteProduct}) {

  const onSelectUpdate=async(link)=>{
// console.log(link);
    let product=await getProductById(link)
     onSelectProduct(product)

  }

  
//================================================================
// function to delete product
const onSelectDelete=async(product_id_link)=>{
  const deletedProduct=await deleteProduct(product_id_link)
  onDeleteProduct();

  }
//==============================================================

  return (
    <div>

      <div className="col">
        <div class="card ">
          <div class="card-body">
          <img src={product_link+"/image"} class="card-img-top" alt="..."/>

            <h5 class="card-title">ProductName: {productName}</h5>
            <p class="card-text">Description: {ProductDescription}</p>
            <p class="card-text">Price: {productPrice}</p>
            {/* Updata Button */}
            <button className="btn btn-success" onClick={()=>{onSelectUpdate(product_link)}}>Update</button>
            {/* Delete Button */}
            <button className="btn btn-danger" onClick={()=>{onSelectDelete(product_link)}}> Delete</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductItem;
