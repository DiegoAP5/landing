import React from 'react'
import "./Paquete.css"
import Image from 'next/image';
import Boton from '@/components/Atomos/boton/Boton';
import Card1 from '@/components/Atomos/Card/Card1';

function Paquete() {
    return (
        <>
            <div className='paginaPaquetes'>
                <div className='tituloPaquete'>
                    <h2>Paquetes <span></span> </h2> 
                    <p>Elige el mejor para ti</p>


                </div>


                <div className="divPaquetes">

                    <div className="divPaquete">
                    <Card1
                    urlImg="/premium.png"
                    />

                    </div>
                    <div className="divPaquete">
                    <Card1
                    urlImg="/Básico.png"
                    />
                    </div>


                </div>
            </div>
        </>

    )
}

export default Paquete