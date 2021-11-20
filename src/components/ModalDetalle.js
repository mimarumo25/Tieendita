import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";

export function ModalDetalle(props) {
    console.log(props);

    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="modal-xl">
                <Modal.Header closeButton />
                <Modal.Body>
                    <div className="row flex">
                        <div className="col-7">
                            <img className="w-75 m-5"
                                src="https://e7.pngegg.com/pngimages/59/37/png-clipart-hass-avocado-mousse-food-fruit-ripening-aguacate-food-agriculture.png"
                                alt="Producto Aguacate" />
                        </div>
                        <div className="col-4">
                            <h1 className="mt-5" >Aguacate Hass</h1>
                            <h5 className="mt-3"> $ 6.900 <small>/ KG</small></h5>
                            <p>Precio iva incluido </p>
                            <h6>Peso aproximado por pieza, puede variar de acuerdo al peso real.</h6>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
