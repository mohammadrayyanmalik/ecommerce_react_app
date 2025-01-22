import React, { useEffect, useState } from "react";
import { getProduct, getProductAToZ, getProductHighToLow, getProductLowToHigh, getProductZToA } from "../../services/ProductService";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";

function Product() {
  let [products, setProduct] = useState([]);
  let [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data);
    });
  }, []);

  const refreshProduct = () => {
    getProduct().then((data) => {
      setProduct(data);
    });
  };

  const handleSelectProduct = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
    console.log(selectedProduct);
  };

  // To sort Data
  const sortBy = async (choice) => {
    switch (choice) {
      case 1:
        setProduct(await getProductLowToHigh());
        break;
      case 2:
        setProduct(await getProductHighToLow());
        break;
      case 3:
        setProduct(await getProductAToZ());
        break;
      case 4:
        setProduct(await getProductZToA());
        break;
    }
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            {/* Product From Start */}

            <ProductForm
              onAddProduct={refreshProduct}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />

            {/* Produt Form End */}
          </div>
          <div class="col">
            {/* Showing number of products : start */}
            <button type="button" class="btn btn-primary">
              Number of Products{" "}
              <span class="badge bg-primary" mb-3>
                {products.length}
              </span>
            </button>
            {/* Showing number of products : end */}

            {/* Sorting start */}
            <ul className="list-group mt-3">
              <li class="list-group-item" onClick={()=>{sortBy(1)}}>
                Low to High
              </li>
              <li class="list-group-item" onClick={()=>{sortBy(2)}}>
                High to Low
              </li>
              <li class="list-group-item" onClick={()=>{sortBy(3)}}>
                A to Z
              </li>
              <li class="list-group-item" onClick={()=>{sortBy(4)}}>
                Z to A
              </li>
            </ul>
            {/* sorting End */}

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
                    onDeleteProduct={refreshProduct}
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
