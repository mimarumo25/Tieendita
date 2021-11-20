import React from 'react'
import line from '../images/Line.png'
import location from '../images/location.png'
import { Divcarrito, Divlocationycarrito } from '../template/Template'
import Carrito from './Carrito'

const Logocarrito = () => {



    return (
        <Divlocationycarrito>
            <img src={location} alt="location"></img>
            <img src={line} alt="linea"></img>
            <Divcarrito >
               <Carrito placement={"end"}></Carrito>
            </Divcarrito>
        </Divlocationycarrito>
    )
}

export default Logocarrito
