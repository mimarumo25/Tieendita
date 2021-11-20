import React, { useContext, useState } from 'react';
import { ButtonGroup, Offcanvas, Table } from 'react-bootstrap';
import { Divcarrito } from '../template/Template';
import carrito from '../images/Icons.png'
import { OfertaContext } from '../routers/AppRouter';


const Carrito = ({ ...placement }) => {
  const [show, setShow] = useState(false);
  const { productosCarrito } = useContext(OfertaContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(productosCarrito);
  return (
    <>
      < Divcarrito onClick={handleShow} className="me-2" >
        <img src={carrito} alt="carrito">
        </img>
      </Divcarrito>

      <Offcanvas show={show} onHide={handleClose} {...placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compra</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {
                productosCarrito.map((p) => (
                  <tr key={p.id}>
                    <td>{p.nombre}</td>
                    <td><img src={p.imagen} alt={p.nombre} width="40px" height="40px" /></td>
                    <td>{p.cantidad}</td>
                    <td>{p.precio}</td>
                    
                  </tr>
                ))
              }
              <ButtonGroup className=" btn btn-primary m-3">Pagar</ButtonGroup>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Carrito;
