import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom" // Importamos los componentes de la librería. // Nos basamos en el ejemplo anterior de React Router.
import axios from "axios" // Importamos axios.
import { postProductsAxios, postProductsFetch } from "./assets/js/ejemploPost.js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"// Importamos los componentes de React Query.
const queryClient = new QueryClient();// Este es el cliente en si mismo, se encargará de controlar los llamados HTTP.
import Ejemplo from "./assets/js/ejemploReactQuery.jsx" //importamos el ejemplo de ReactQuery
import { ReactQueryDevtools } from "@tanstack/react-query-devtools" // Importamos el componente de DevTools.
import BtnEjemplo from "./components/BtnEjemplo.jsx"
import ExampleCard from "./components/ExampleCard.jsx"



const ejemploBody = { // Armamos el body que requiera el servicio.
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
}

// postProductsFetch(ejemploBody) // Invocamos el ejemplo de fetch.
// postProductsAxios(ejemploBody) // Invocamos el ejemplo de axios.







const HomePage = () => {
  return (<>
    {/* <Ejemplo/> */}
    <h1 style={{fontSize: "20px",color:"red"}}>Home Page</h1>
    <ExampleCard/>
    {/* <Link to={"/error"}>Ir al error.</Link>
    <BtnEjemplo /> */}
  </>)
}
const ErrorPage = () => {
  return (<><h1 className="ejemploDeClase">Error Page</h1>
    <Link to={"/404"}>Ir a 404.</Link></>) // Usamos el componente <Link /> para navegar a la página de Home.
}

const NotFoundPage = () => {
  return (
    <>
      <h1>Error 404!</h1>
      <h2>Not Found!</h2>
      <Link to={"/"}>Ir al home.</Link>
    </>
  )
}
function App() {

  const getProductsFetch = () => // Creamos función de ejemplo GET con fetch.
    fetch("https://fakestoreapi.com/products") // Configuración básica del GET.
      .then(response => response.json()) // Transformamos el response a JSON.
      .then(response => console.log("Ejemplo GET fetch:", response)) // Logueamos el resopnse.

  const getProductsAxios = () => // Creamos función de ejemplo GET con axios.
    axios.get("https://fakestoreapi.com/products") // Configuración básica del GET.
      .then(response => response.data) // Extraemos la data del response.
      .then(response => console.log("Ejemplo GET axios:", response)) // Logueamos el resopnse.

  // getProductsFetch() // Invocamos la función con fetch a modo de ejemplo.
  // getProductsAxios() // Invocamos la función con axios a modo de ejemplo.


  return (
    // Con este componente vamos a proveer todas las funcionalidades a la APP.
    // El componente BrowserRouter habilita la navegación de manera global, forma parte de la configuración de la librería.
    // Colocamos el componente de DevTools (ReactQueryDevtools).
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes> // Este componente se encarga de manejar las rutas.
          <Route path="/" element={<HomePage />} /> // Este componente asocia cada ruta con cada página.
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}





//  EJEMPLO DE RENDER CONDICIONAL EN BASE A UN ESTADO GLOBAL

// import { usePagesStore } from "./stores/usePagesStore"

// const NotFoundPage = () => {
//   const navigateTo = usePagesStore(state => state.navigateTo)
//   return (
//     <>
//       <h1>Error 404!</h1>
//       <h2>Not Found!</h2>
//       <button onClick={() => navigateTo("home")}>Ir al home.</button></>
//   )
// }

// const HomePage = () => {
//   const navigateTo = usePagesStore(state => state.navigateTo)
//   return (
//     <><h1>Home Page</h1>
//       <button onClick={() => navigateTo("error")}>Ir al error.</button></>
//   )
// }
// const ErrorPage = () => {
//   const navigateTo = usePagesStore(state => state.navigateTo)
//   return (
//     <>
//     <h1>Error Page</h1>
//       <button onClick={() => navigateTo("notFound")}>Ir 404.</button>
//     </>
//   )
// }
// function App() {
//   const page = usePagesStore(state => state.page)
//   return page === "home" ? <HomePage /> : page === "error" ? <ErrorPage /> : page === "notFound" ? <NotFoundPage /> : <></>
// }





//   EJEMPLO CON ESTADOS GLOBALEEEES

// import { useUserStore } from "./stores/useUserStore"
// import Padre from "./components/Padre"

// function App() {
//   const tema = useUserStore(state => state.tema)
//   console.log("estoy dentro del componente App:", tema)
//   return <Padre />
// }



//  EJEMPLO CON PROP DRILLING

// import './App.css'

// const Nieto = ({ tema = "" }) => {
//   return <button>{tema === "oscuro" ? "🌙" : "🌞"}</button> // El nieto consume el valor.
// }

// const Hijo = ({ tema = "" }) => <Nieto tema={tema} /> // El hijo pasa el valor del padre al nieto.

// const Padre = ({ tema = "" }) => <Hijo tema={tema} /> // El Padre recibe el valor del componente App.

// function App() {
//   return <Padre tema="oscuro" /> // En este lugar se determina el valor que va a llegar hasta el último nivel.
// }


export default App
