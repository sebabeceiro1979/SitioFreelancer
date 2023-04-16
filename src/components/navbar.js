import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-custom sticky-lg-top">
            <div class="container">
               <h1>
               <a class="fs-3 fw-bold navbar-brand d-none d-md-inline" href="#!">DigitalVision Lab</a>
                <a class="fs-3 fw-bold togglerTitle navbar-brand d-md-none" href="#!">&lt;DBLab/&gt;</a>
               </h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index-content.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="acerca-de-content.html">Acerca de</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto-content.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;