import styled from "styled-components" // Importamos el objeto styled de la librería.
 
export const BtnEjemploStyled = styled.button` // El objeto styled tiene muchas configuraciones, esta es simplemente una.
  cursor: pointer; // Dentro de los template-strings pondremos CSS.
  background-color: #7286d3;
  color: #e5e0ff;
  border-radius: 0.5rem;
  border: 0;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem; // Si queremos ver estos colores en el VSCode, debemos instalar la extensión de styled-components.
  font-weight: bold;
 
  &:hover { // Este tipo de sintaxis es similar a la de SASS.
    background-color: #e5e0ff;
    color: #7286d3;
  }
`
