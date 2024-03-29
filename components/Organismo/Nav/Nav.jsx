import Style from "./Nav.module.css";

import Cita from '@/components/Atomos/Cita';
import  Buscador from '@/components/Atomos/buscador/buscador';
import Image from 'next/image';

import { BsCart3 } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { LuPackageSearch } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';


const img1 = "./imagenOptica.png"

function Nav() {
  return (



    <>
    <div className={Style.DivNav}>
      <div className={Style.DivCita}>
        <Cita/>
      </div>
      <div className={Style.DivLogo}>
        <h2 className={Style.logo}>NutriVida</h2>
      </div >
      <div className={Style.DivIconos}>
        <Buscador/>
        <div className={Style.Iconos}>
      <IoLocationOutline
        size={32}
      />
            <LuPackageSearch
        size={32}
      />
            <BsPersonCircle
        size={32}
      />
            <BsCart3
        size={32}
      />
      </div>
      </div>

    </div>


<div className={Style.NavSec}>

</div>


    
    </>

    
  );
}

export default Nav;
