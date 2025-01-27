

const API_LINK="http://localhost:8080/category"
export const getCategories=()=>{
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data._embedded.categories)
    
}