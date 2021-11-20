import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {urlpop} from '../ayuditas/url'
import { OfertaContext } from '../routers/AppRouter';
import { Buttonagregar, Containerproductos, Containertarjetas, Tarjetasproductos } from '../template/Template';

export default function Populares() {

    const [ofertas, setOfertas] = useState([])
    const { setProductosCarrito }= useContext(OfertaContext);

    useEffect(() => {
        obtenerOfertas()
    }, [])

    

    const obtenerOfertas = () => {

       axios.get(urlpop)
       .then((resp)=>{
        setOfertas(resp.data)
       })
       .catch((error) => {
        console.log(error);
      });

    }
    
    const handleAddCarrito = (data) => {

        setProductosCarrito(prevState => {
            const carrito = [...prevState]
              const existeProducto= carrito.some(item => item.id === data.id)
            if (!existeProducto) {
              return [...carrito, {...data, cantidad: 1}]
            }
            return  carrito.map(item => {
              if (item.id === data.id){
            const cantidad = item.cantidad || 0;
              return {...item, cantidad: cantidad + 1}
            }
            return {...item}
            })
            })
       
    }
console.log(ofertas);
    return (
        <Containerproductos>
            <h1>Ofertas</h1>
            <Containertarjetas>
            {
                ofertas.map((data)=>(
                    <Tarjetasproductos key={data.id}>
                        
                        <img src={data.imagen}></img>
                        <p>{data.precio}</p>
                        <p>{data.nombre}</p>

                        <p>{data.contenido}</p>

                        <Buttonagregar onClick={() => handleAddCarrito(data)}>Agregar</Buttonagregar>
                    </Tarjetasproductos>
                ))
            }
            </Containertarjetas>
        </Containerproductos>
    )
}
