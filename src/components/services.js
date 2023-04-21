import React from "react";

function Services() {
  return (
    <div class="container">

      <div class="row my-2 my-lg-4">
        <h2 class="sectionTitle">Mis Servicios</h2>
        <section class="service col-12 col-md-4 d-flex flex-column text-center">
          <h3>Diseño Web</h3>
          <div class="icons align-self-center my-3 d-flex justify-content-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-palette serviceIcon"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
              <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
            </svg>
          </div>

          <p class="mb-0">
            Pellentesque odio ex, bibendum quis convallis scelerisque,
            eleifend vitae lectus. Quisque in erat justo.
          </p>
        </section>

        <section class="service col-12 col-md-4 d-flex flex-column text-center">
          <h3>Aplicaciones Web</h3>
          <div class="icons align-self-center my-3 d-flex justify-content-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-android serviceIcon"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="10" x2="4" y2="16" />
              <line x1="20" y1="10" x2="20" y2="16" />
              <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
              <line x1="8" y1="3" x2="9" y2="5" />
              <line x1="16" y1="3" x2="15" y2="5" />
              <line x1="9" y1="18" x2="9" y2="21" />
              <line x1="15" y1="18" x2="15" y2="21" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-apple serviceIcon"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>
          </div>
          <p class="mb-0">
            Vel cupiditate quia quo officiis obcaecati ut officiis quis aut
            rerum voluptatem et expedita tempora quo distinctio cupiditate.
          </p>
        </section>

        <section class="service col-12 col-md-4 d-flex flex-column text-center">
          <h3>e-Commerce</h3>
          <div class="icons align-self-center my-3 d-flex justify-content-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-credit-card serviceIcon"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="7" y1="15" x2="7.01" y2="15" />
              <line x1="11" y1="15" x2="13" y2="15" />
            </svg>
          </div>
          <p class="mb-0">
            Quo quasi asperiores aut quia iusto cum deleniti quasi qui
            perferendis autem. Qui quasi tempore in quaerat nemo vel
            voluptatem dolor.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Services;
