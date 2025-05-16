import { useQuery } from "@tanstack/react-query" // Importamos el hook useQuery.
import axios from "axios" // Usaremos axios.
 
const getTitles = () => // Creamos una función para trabajar los datos.
  axios.get("https://fakestoreapi.com/products") // Configuración básica del axios.
     .then(({ data }) => data.map(({ title }) => title)) // Extraemos los títulos del response.
    //  .then(({ data }) => data) // Probar esta también esta alternativa para ver que ocurre en este caso.
 
function Ejemplo() { // Creamos un componente para probar el caso.
  const { data: titles = [], isLoading } = useQuery({ // Utilizaremos los títulos y el estado isLoading.
    queryKey: ["products"], // Configuramos las queryKeys, servirá para realizar tareas de caché.
    queryFn: getTitles, // Le decimos a React Query que vamos a usar la función que creamos arriba.
  })
  return <>{isLoading ? "cargando..." : JSON.stringify(titles)}</> // Renderizamos los datos a modo de ejemplo.
}
 
export default Ejemplo