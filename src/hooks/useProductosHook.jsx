import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const getProducts = () =>
  axios.get("https://fakestoreapi.com/products")
    .then(({ data }) => data) // Simplemente extraemos el objeto data de axios.
 
const useProductosQuery = () => {
  const { data: products = [], isLoading } = useQuery({ // Extraemos los productos y el estado isLoading.
    queryKey: ["products"],
    queryFn: getProducts,
  })
  const categories = [...new Set(products.map(product => product.category))] // Creamos categorías únicas.
  const maxPrice = Math.max(...products.map(product => product.price)) // Buscamos el precio más alto.
  const minPrice = Math.min(...products.map(product => product.price)) // Buscamos el precio más bajo.
  return { categories, isLoading, products, maxPrice, minPrice } // Devolvemos valores procesados listos para consumir.
}
export default useProductosQuery