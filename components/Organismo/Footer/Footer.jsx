import React from 'react'
import style from "./Footer.module.css"
import Image from 'next/image';


const img1 = "./imagenOptica.png"

function Footer() {
    const fruits = ['Apple', 'Banana', 'Orange'];
    const handleFruitSelect = (selectedFruit) => {
      console.log(`Selected fruit: ${selectedFruit}`);
      // Puedes hacer lo que necesites con el valor seleccionado aquí
    };
    return (

        <>
        <div className={style.divFooter}>
            <div className={style.divfooterinf}>

                <h2 className={style.logo}>NutriVida</h2>

            </div>
            <div className={style.divfooterinf}>
            <Image
                        src="/SuperEmpresasImg.webp"
                        alt="Descripción del icono"
                        width={200}
                        height={150}
                        
                    />
                    <Image
                        src="/ESRImg.png"
                        width={200}
                        height={150}
                        
                    />

            </div>




            <div className={style.divfooterinf}>

                <p>Atencion a clientes</p>

                <div>
                    <Image
                        src="/logoWhats.webp"
                        alt="Descripción del icono"
                        width={20}
                        height={20}
                        
                    />
                    <p>55 4500 2422</p>
                </div>
                <div>
                    <Image
                        src="/logoTelefono.svg"
                        alt="Descripción del icono"
                        width={20}
                        height={20}
                    />
                    <p>55 5262 4117</p>
                </div>
                <div>
                    <Image
                        src="/logoCalendario.svg"
                        alt="Descripción del icono"
                        width={20}
                        height={20}
                    />
                    <p>
                        Lunes a Viernes de 8:00 am a 8:00 pm.
                        Sábados y Domingos de 10:30 am a 8:00 pm</p>
                </div>
                <div>
                    <Image
                        src="/logoCorreo.svg"
                        alt="Descripción del icono"
                        width={20}
                        height={20}
                    />
                    <p>atencionaclientes@nutrivida.com</p>
                </div>


                <div>
              <a href="">Consulta términos y condiciones aquí</a>
              
                </div>
                <div>

                <p className={style.pcualquiera}>Siguenos en:</p>
                <Image
                        src="/logoInsta.png"
                        alt="Descripción del icono"
                        width={20}
                        height={20}
                    />
                      <Image
                        src="/logoFacce.png"
                        alt="Descripción del icono"
                        width={20}
                        height={20}
                    />
                </div>

                <div className={style.acualquiera}>
                    <p  className={style.pcualquiera}>Suscribete para recibir promociones</p>
                <br />
                </div>


            </div>

        </div>


        </>

    )
}

export default Footer