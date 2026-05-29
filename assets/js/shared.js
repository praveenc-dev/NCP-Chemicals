/* ================================================
   shared.js — NCP Chemicals & Formulas / Pelican
   Navbar + Footer injection + Utilities
   ================================================ */

(function () {
  const WA_NUM = '917010613671';
  const WA_MSG = 'Hello! I am interested in NCP Chemicals & Formulas (Pelican) products. Please share more details.';

  /* ---- NAVBAR HTML ---- */
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg" id="main-navbar">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
        <img src="assets/images/logo.png" alt="Pelican Logo">
        <div class="brand-text">
          <div class="brand-name">NCP Chemicals & Formulas</div>
          <div class="brand-tagline">NCP-Chemicals ® — Science for a Better Home</div>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-1 py-2 py-lg-0">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
          <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          <li class="nav-item ms-lg-3">
            <a class="nav-link btn-whatsapp-nav" href="https://wa.me/${WA_NUM}?text=${encodeURIComponent(WA_MSG)}" target="_blank">
              <i class="bi bi-whatsapp me-1"></i> WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;

  /* ---- FOOTER HTML ---- */
  const footerHTML = `
  <footer id="main-footer">
    <div class="container">
      <div class="row g-5">
        <!-- Brand Col -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-brand">
            <img src="assets/images/logo.png" alt="Pelican Logo">
            <div class="footer-brand-name">NCP Chemicals & Formulas</div>
            <div class="footer-brand-tag">NCP-Chemicals ®</div>
          </div>
          <p class="footer-desc">Crafting premium household cleaning products with science-backed formulas for a cleaner, safer home. Trusted across Tamil Nadu for over 10 years.</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/" target="_blank" class="footer-social-link" title="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/" target="_blank" class="footer-social-link" title="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.youtube.com/" target="_blank" class="footer-social-link" title="YouTube"><i class="bi bi-youtube"></i></a>
            <a href="https://wa.me/${WA_NUM}" target="_blank" class="footer-social-link" title="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6">
          <h6 class="footer-heading">Quick Links</h6>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="products.html">Our Products</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <!-- Products -->
        <div class="col-lg-3 col-md-6">
          <h6 class="footer-heading">Our Products</h6>
          <ul class="footer-links">
            <li><a href="products.html">Hand Wash</a></li>
            <li><a href="products.html">Dishwash Liquid</a></li>
            <li><a href="products.html">Hand Sanitizer</a></li>
            <li><a href="products.html">Detergent Powder & Liquid</a></li>
            <li><a href="products.html">Fabric Conditioner</a></li>
            <li><a href="products.html">Toilet Cleaner</a></li>
          </ul>
        </div>
        <!-- Contact -->
        <div class="col-lg-4 col-md-6">
          <h6 class="footer-heading">Get In Touch</h6>
          <div class="footer-contact-item">
            <span class="footer-contact-icon"><i class="bi bi-geo-alt-fill"></i></span>
            <div class="footer-contact-text">2/66, Kulamaniannadam Main Road,<br>Kalankeras Road, Madurai – 625017,<br>Tamil Nadu, India</div>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon"><i class="bi bi-telephone-fill"></i></span>
            <div class="footer-contact-text"><a href="tel:+917010613671">+91 70106 13671</a></div>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon"><i class="bi bi-whatsapp"></i></span>
            <div class="footer-contact-text"><a href="https://wa.me/${WA_NUM}" target="_blank">+91 70106 13671</a></div>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon"><i class="bi bi-envelope-fill"></i></span>
            <div class="footer-contact-text"><a href="mailto:ncp.chemicals.formulas@gmail.com">ncp.chemicals.formulas@gmail.com</a></div>
          </div>
        </div>
      </div>
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p>© ${new Date().getFullYear()} NCP Chemicals & Formulas. All Rights Reserved. NCP-Chemicals ®</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p>Made with ❤️ in Madurai, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </div>
  </footer>`;

  /* ---- WHATSAPP FLOAT ---- */
  const waFloat = `<a href="https://wa.me/${WA_NUM}?text=${encodeURIComponent(WA_MSG)}" class="whatsapp-float" target="_blank" title="Chat on WhatsApp"><i class="bi bi-whatsapp"></i></a>`;

  /* ---- INJECT ---- */
  document.addEventListener('DOMContentLoaded', function () {
    const navEl = document.getElementById('navbar-placeholder');
    const footEl = document.getElementById('footer-placeholder');
    if (navEl) navEl.innerHTML = navbarHTML;
    if (footEl) footEl.innerHTML = footerHTML;
    document.body.insertAdjacentHTML('beforeend', waFloat);

    /* Active nav link */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#main-navbar .nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });

    /* Scroll animations */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    /* Counter animation */
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.classList.contains('counted')) {
          e.target.classList.add('counted');
          const target = parseInt(e.target.dataset.count);
          const suffix = e.target.dataset.suffix || '';
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            e.target.textContent = current + suffix;
            if (current >= target) clearInterval(timer);
          }, 30);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    /* Product filter tabs */
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productCards = document.querySelectorAll('[data-category]');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const cat = this.dataset.filter;
        productCards.forEach(card => {
          if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = '';
            card.classList.add('fade-up');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    /* Gallery lightbox */
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      const lbImg = document.getElementById('lightbox-img');
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function () {
          lbImg.src = this.querySelector('img').src;
          lightbox.classList.add('active');
        });
      });
      document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('active'));
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) lightbox.classList.remove('active');
      });
    }
  });
})();
