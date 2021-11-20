import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, createContext } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Ofertas from '../components/Ofertas'
import Populares from '../components/Populares'


export const OfertaContext = createContext({
  
    productosCarrito: [],
    setProductosCarrito: () => null
  });
export default function AppRouter() {

   
    const [productosCarrito, setProductosCarrito] = useState([])
    
    const contextData = {
   
        productosCarrito,
        setProductosCarrito
     };

    return (
        <OfertaContext.Provider value={contextData}>
            <Navbar />
            <Banner />

            <BrowserRouter>
            <Ofertas />
            <Populares />
                <Routes>
                    <Route exact path="/:productos/:id" element={<Ofertas/>} />
                </Routes>
            </BrowserRouter>
        </OfertaContext.Provider>
    )
}
