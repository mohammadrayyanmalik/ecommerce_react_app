import React, { useEffect, useState } from "react";
import {
  getProduct,
  getProductAToZ,
  getProductHighToLow,
  getProductLowToHigh,
  getProductZToA,
} from "../../services/ProductService";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";

function Product({queryFromNavbar}) {
  let [products, setProduct] = useState([]);
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data);
    })
    if(queryFromNavbar)
    {
      setSearchQuery(queryFromNavbar)
    }
  }, [queryFromNavbar]);

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

  // sorting data

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Product From Start */}

            <ProductForm
              onAddProduct={refreshProduct}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />

            {/* Produt Form End */}
          </div>
          <div className="col">
            {/* Showing number of products : start */}
            <button type="button" className="btn btn-primary">
              Number of Products{" "}
              <span className="badge bg-primary" mb-3>
                {products.length}
              </span>
            </button>
            {/* Showing number of products : end */}

            {/* Sorting start */}
            <ul className="list-group mt-3">
              <li
                className="list-group-item"
                onClick={() => {
                  sortBy(1);
                }}
              >
                Low to High
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sortBy(2);
                }}
              >
                High to Low
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sortBy(3);
                }}
              >
                A to Z
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sortBy(4);
                }}
              >
                Z to A
              </li>
            </ul>
            {/* sorting End */}
            <hr />
            {/*==================================================== search :Start =============================*/}

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>{setSearchQuery(e.target.value)}}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            {/*======================================= Search :End======================================== */}

            {/* Displaying product :Start */}

            <div className="row row-cols-1 row-cols-md-2 g-4 p-1 my-1">
              {products.filter(p=>{
                return p.productName.toLowerCase()
                .includes(searchQuery.toLowerCase()) 
              }).map((p) => {
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
