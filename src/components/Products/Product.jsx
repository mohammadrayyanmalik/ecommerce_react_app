import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/ProductService";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";

function Product() {
  let [products, setProduct] = useState([]);
  let [selectedProduct,setSelectedProduct]=useState(null);

  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data);
    });
  }, []);

  const refreshProduct=()=>{
    getProduct().then(data=>{
      setProduct(data);
    })
  }

  const handleSelectProduct=(selectedProduct)=>{
      setSelectedProduct(selectedProduct)
      console.log(selectedProduct)  
  }

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            {/* Product From Start */}

            <ProductForm onAddProduct={refreshProduct} selectedProduct={selectedProduct} />

            {/* Produt Form End */}
          </div>
          <div class="col">
            {/* Displaying product :Start */}

            <div class="row row-cols-1 row-cols-md-2 g-4 p-1 my-1">
              {products.map((p) => {
                return (
                  <ProductItem //p.productName jo hai woh Api ka name hai and productName= props hai
                    productName={p.productName}
                    ProductDescription={p.description}
                    productPrice={p.productPrice}
                    product_link={p._links.self.href}
                    onSelectProduct={handleSelectProduct}
                    
                  />
                );
              })}
            </div>
            {/* Displaying product :end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
