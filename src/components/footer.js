import React from 'react';

function Footer() {
  return (
    <footer class="footer py-lg-4 py-sm-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-center d-flex flex-row flex-lg-column justify-content-center">
          <h4 class="footer-text pe-sm-2">DigitalVision Lab</h4>
          <span class="footer-text">&copy; 2023</span>
        </div>
        <div class="col-lg-6 text-center d-flex flex-row flex-lg-column justify-content-center">
          <h4 class="footer-text pe-sm-2">Contáctanos</h4>
          <span class="footer-text">
            Email: <a href="mailto:info@example.com" class="footer-link">info@digitalvisionlab.com</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;