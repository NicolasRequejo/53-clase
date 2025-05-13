import "./App.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom" // Importamos los componentes de la librería.
const HomePage = () => {
  return (<><h1>Home Page</h1>
      <Link to={"/error"}>Ir al error.</Link></>) // Usamos el componente <Link /> para navegar a la página de Error.
}
const ErrorPage = () => {
  return (<><h1>Error Page</h1>
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
  return (
    <BrowserRouter> // Este componente habilita la navegación de manera global, forma parte de la configuración de la librería.
      <Routes> // Este componente se encarga de manejar las rutas.
        <Route path="/" element={<HomePage />} /> // Este componente asocia cada ruta con cada página. 
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/404" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
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
