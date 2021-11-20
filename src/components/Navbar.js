import React from 'react'
import { Navbarstyle } from '../template/Template'
import Logocarrito from './Logocarrito'
import Logotiendita from './Logotiendita'

export default function Navbar() {
    return (
        <Navbarstyle>
            <Logotiendita/>
            
            <Logocarrito/>
        </Navbarstyle>
    )
}
