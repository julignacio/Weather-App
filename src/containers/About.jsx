import React from 'react';
import './About.css';

export default function About() {
  function alerta() {
    let el = document.querySelector('.modal')
    if (el.style.display === 'none') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  }
  return (
    <div className='about'>
      <h4 className='title'> About </h4>
      <p className='p'> Esta es una pagina creada para la semana de React del bootcamp Henry. <br />
      La utilidad principal esta en el path ' / ' y es mostrar el clima actual de la ciudad introducida en el input. Ademas, si se clickea la tarjeta devuelta se va a llevar a ' /ciudad/:ciudadID ' que es un path en el que se muestra mas informacion acerca del clima en ese lugar. </p>
      <footer className='footer' onClick={alerta}>
          Pagina creada por Julian.
      </footer>
      <div className='modal'>
        <button onClick={alerta}> X </button>
        <h4 className='title'> Practica React </h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat elit diam, ac tempus est egestas eu. Vivamus eleifend est ante, vel rutrum erat interdum id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis lobortis ex at mollis. Cras tellus libero, rhoncus id sem vitae, varius porttitor mi. Nam dictum lacus eget mauris pellentesque eleifend. Morbi posuere enim eu dignissim fringilla. Phasellus non nisl turpis. Duis dui turpis, consectetur non urna a, dictum tristique enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis mattis magna. </p>
      </div>
    </div>
    )
}
