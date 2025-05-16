import {useState} from 'react'
import "../assets/styles/styles.css"
import { BtnEjemploStyled } from '../assets/js/BtnEjemploStyled'

export default function BtnEjemplo() {
    const [isHover, setIsHover] = useState(false)
    
  return (
    <BtnEjemploStyled>Agregar</BtnEjemploStyled>
  )
}
