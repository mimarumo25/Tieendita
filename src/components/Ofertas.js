import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { urlofer } from '../ayuditas/url'
import { OfertaContext } from '../routers/AppRouter';
import { Buttonagregar, Containerproductos, Containertarjetas, Descuento, Precioynombre, Tarjetasproductos } from '../template/Template';
import { ModalDetalle } from './ModalDetalle';

export default function Ofertas() {
    let idDetalle;
    const { setProductosCarrito } = useContext(OfertaContext);
    const [modalShow, setModalShow] = useState(false);
    const [ofertas, setOfertas] = useState([])


    useEffect(() => {
        obtenerOfertas()
    }, [])
    const obtenerOfertas = () => {

        axios.get(urlofer)
            .then((resp) => {
                setOfertas(resp.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const haandleDatos = ({ target }) => {
      
        idDetalle = target.id 
        console.log(idDetalle);
    }
    const handleAddCarrito = (data) => {

        setProductosCarrito(prevState => {
            const carrito = [...prevState]
            const existeProducto = carrito.some(item => item.id === data.id)
            if (!existeProducto) {
                return [...carrito, { ...data, cantidad: 1 }]
            }
            return carrito.map(item => {
                if (item.id === data.id) {
                    const cantidad = item.cantidad || 0;
                    return { ...item, cantidad: cantidad + 1 }
                }
                return { ...item }
            })
        })

    }
    return (
        <div>
            <Containerproductos>
                <h1>Ofertas</h1>
                <Containertarjetas>
                    {
                        ofertas.map((data) => (

                            <Tarjetasproductos key={data.id} > 

                                <Descuento>{data.descuento}</Descuento>
                                <img src={data.imagen}  onClick={() => setModalShow(true)} alt={data.nombre}></img>
                                <Precioynombre>
                                    <p>{data.precio}</p>
                                    <p>{data.nombre}</p>

                                </Precioynombre>
                                <Buttonagregar onClick={() => handleAddCarrito(data)} >Agregar</Buttonagregar>
                                
                            </Tarjetasproductos>

                        ))

                    }
                    <ModalDetalle show={modalShow} onHide={() => setModalShow(false)} data={ofertas} id={idDetalle}/>
                </Containertarjetas>
            </Containerproductos>


        </div>
    )
}
