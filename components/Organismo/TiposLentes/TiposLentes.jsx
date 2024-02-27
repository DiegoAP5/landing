import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TiposLentes.css';
import Img from 'next/image';


function TiposLentes() {
    const producto1 = {
        urlLogo: "/lentesA.webp",
        nombre: "Platillo 1",
        descripcion: "Platillo alto en carbohidratos",
        precio: 19.99,
      };
      const producto2 = {
        urlLogo: "/lentesC.webp",
        nombre: "Platillo 2",
        descripcion: "Nuestra mejor recomendación, un platillo balanceado",
        precio: 19.99,
      };
    
      const producto3 = {
        urlLogo: "/lentesR.webp",
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
        slidesToScroll: 3,
        arrows: false, // Oculta el botón de siguiente
      };
    
      return (
        <div className='PaginaCarouselLentes3'>
          <div className='divCarouselIzquierdo3'>
            <p>Lentes Solares</p>
            <h2>Descubre un nuevo estilo</h2>
            <a href="https://.com">Compra ahora</a>
          </div>
    
          <div className='divCarouselDerecho3'>
            <div className="carousel-container3">
              <Slider {...settings}>
                {lentes.map((lente, index) => (
                  <div key={index} className="slide3">
                    <Img src={lente.urlLogo} width={654} height={570} alt={lente.nombre} objectFit="contain" layout="responsive" />                    
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      );
}

export default TiposLentes