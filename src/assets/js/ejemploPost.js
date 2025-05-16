import axios from "axios"
 
const postProductsFetch = body =>
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => console.log('fetch:',response))
 
const postProductsAxios = body =>
  axios.post("https://fakestoreapi.com/products", body)
    .then(response => response.data)
    .then(response => console.log('axios:',response))
 
export { postProductsAxios, postProductsFetch }
