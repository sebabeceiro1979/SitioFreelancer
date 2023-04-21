import React from 'react';

function ContactForm() {
  return (
    <div class="container">
      <h2 class="sectionTitle">Contacto</h2>
      <section>
        <form class="formulario my-0 mx-auto p-4 rounded-4" action="#" method="POST">
          <fieldset class="border border-0">
            <legend class="text-center fw-bold text-uppercase mb-4">Contactános llenando todos los campos</legend>
            <div class="row g-3">

              <div class="col-lg-6 col-12">
                <label class="form-label">Nombre:</label>
                <input type="text" class="form-control w-100" name="nombre" placeholder="Nombre" required />
              </div>

              <div class="col-lg-6 col-12">
                <label class="form-label">Teléfono:</label>
                <input type="tel" class="form-control w-100" name="telefono" placeholder="Teléfono" required />
              </div>

              <div class="col-12">
                <label class="form-label">Correo:</label>
                <input type="email" class="form-control w-100" name="correo" placeholder="Mail" required />
              </div>

              <div class="col-12">
                <label class="form-label">Mensaje:</label>
                <textarea class="form-control"></textarea>
              </div>

              <div class="d-grid gap-2 d-lg-flex justify-content-lg-end">
                <button class="btn btn-info btn-lg btnSend" type="button">Enviar</button>
              </div>
            </div>
          </fieldset>
        </form>

      </section>
    </div>
  );
}

export default ContactForm;