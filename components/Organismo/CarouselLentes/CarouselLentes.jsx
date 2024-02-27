import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselLentes.css';
import LenteCom2 from '@/components/Atomos/lenteCom2/LenteCom2';

function CarouselLentes() {
  const producto1 = {
    urlLogo: "/carbo.webp",
    nombre: "Platillo 1",
    descripcion: "Platillo alto en carbohidratos",
  };
  const producto2 = {
    urlLogo: "/balanceado.webp",
    nombre: "Platillo 2",
    descripcion: "Platillo balanceado",
  };

  const producto3 = {
    urlLogo: "/grasas.jpg",
    nombre: "Platillo 3",
    descripcion: "Platillo alto en grasas",
  };

  const lentes = [producto1, producto2, producto3,producto1, producto2, producto3,producto1, producto2, producto3];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Oculta el botón de siguiente
  };

  return (
    <div className='PaginaCarouselLentes'>
      <div className='divCarouselIzquierdo'>
        <p>Comidas sanas</p>
        <h2>Nuestras recomendaciones</h2>
        <a href="https://.com">Compra ahora</a>
      </div>

      <div className='divCarouselDerecho'>
        <div className="carousel-container2">
          <Slider {...settings}>
            {lentes.map((lente, index) => (
              
<div key={lente.index} className="slide2">
<LenteCom2
urlLogo={lente.urlLogo}
nombre={lente.nombre}
descripcion={lente.descripcion}
precio={lente.precio}
/>
</div>



            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarouselLentes;
