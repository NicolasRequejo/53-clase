import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Image } from "antd" // Importamos los componentes de la librería.
import imgExample from "../assets/img/imgExample.png"
const ExampleCard = () => {
  return (
    <Card
      title="Titulo de la card" // Seteamos el título de la Card.
      hoverable // Booleano en valor true que permite que se pueda hacer hover en la Card.
      style={{ width: "15rem" }} // Estilos de línea.
      cover={<Image src={imgExample} />} // Componente Image de antd.
      extra={<Link to="/error"> 
                <Button type="primary">btn</Button> 
             </Link>}
    ><Card.Meta title="Titulo debajo card" description="Descripcion lalalalalalalalallalala lorem" /></Card>
  ) // Metadata que se puede agregar a la card.
}
export default ExampleCard