import React from 'react'
import "./Lente.css"
import Image from 'next/image';
import Boton from '@/components/Atomos/boton/Boton';
import LenteCom from '@/components/Atomos/lenteCom/lenteCom';

function Lente() {
    return (
        <>
            <div className='paginaPaquetes'>
              

                <div className="divPaquetes">


                    <div className="divPaquete">

                        <LenteCom
                        titulo1="Suplementos"
                        titulo2="Bloom"
                        imagen="/promo3.jpg"
                        precio="699"
                        />
                    </div>

                    <div className="divPaquete">
                    <LenteCom
                        titulo1="Suplementos"
                        titulo2="HomoDeus"
                        imagen="/promo2.jpg"
                        precio="499"
                        />
                   
                    </div>
                    <div className="divPaquete">
                    <LenteCom
                        titulo1="Suplementos"
                        titulo2="Womens blend"
                        imagen="/promo1.jpg"
                        precio="299"
                        />
                    </div>


                </div>
            </div>
        </>

    )
}

export default Lente