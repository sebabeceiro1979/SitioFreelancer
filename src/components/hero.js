import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="contenido-hero">
        <h2 className="title">Diseño y Desarrollo Web
          <br />
          <span>Freelancer</span>
        </h2>
        <div className="d-flex align-items-center ubicacion my-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p> Paysandú, Uruguay</p>
        </div>
        <a href="#contacto">
        <button type="button" class="btn btn-info btn-lg p-4">
          <span className='fw-bold fs-3 btnColor'>Contactar</span>
        </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;