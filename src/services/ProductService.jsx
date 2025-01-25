// logic
// is file me hum logic likhenge how i will add delete update etc

const API_LINK = "http://localhost:8080/products";

export const getProduct = () => {
  return fetch(API_LINK)
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.products;
    });
};

export const addProduct = (product) => {
  return fetch(API_LINK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((data) => data.json())
    .then((data) => data);
};

export const getProductById = (product_link) => {
  return fetch(product_link)
    .then((data) => data.json())
    .then((data) =>data);
};

export const updateProduct=(product_id_link,product)=>{

  return fetch(product_id_link,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(product)
  })
  .then((data) => data.json())
    .then((data) => data);
}

export const deleteProduct=(product_id_link)=>{
  return fetch (product_id_link,{
    method:"Delete"})
    .then((data)=>data.json())
  .then((data)=>data)

}

export const getProductLowToHigh = () => {
  return fetch("http://localhost:8080/products/search/findByOrderByProductPriceAsc")
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.products;
    });
};
export const getProductHighToLow = () => {
  return fetch("http://localhost:8080/products/search/findByOrderByProductPriceDesc")
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.products;
    });
};

export const getProductAToZ = () => {
  return fetch("http://localhost:8080/products/search/findByOrderByProductNameAsc")
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.products;
    });
};
export const getProductZToA = () => {
  return fetch("http://localhost:8080/products/search/findByOrderByProductNameDesc")
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.products;
    });
};

export const uploadProductImage=(product_link,file)=>{
    let formData= new FormData();
    formData.append("productImage",file)

    return fetch(product_link+"/image",{
      method:"POST",
      body:formData
    })
    .then(data=>data.text())
    .then(data=>data)

}
