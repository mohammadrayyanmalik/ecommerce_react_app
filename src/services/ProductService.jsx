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
