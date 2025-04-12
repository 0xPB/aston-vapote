<template>
  <footer>
    <div class="footer-content">
      <div class="contact-section">
        <h4>Contactez-nous</h4>
        <p>
          <a href="mailto:aston.martine33@gmail.com">
            <i class="fas fa-envelope"></i> Envoyez un email
          </a>
        </p>
        <p>
          <a href="tel:+33981398552">
            <i class="fas fa-phone-alt"></i> Appelez-nous
          </a>
        </p>
        <p>
          <a href="https://maps.app.goo.gl/P5XwT8TtuTiZSf486" target="_blank">
            <i class="fas fa-map-marker-alt"></i> Rendez-nous visite
          </a>
        </p>
      </div>

      <div class="social-section">
        <a href="https://www.facebook.com/astonvapote" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <!-- <a href="https://instagram.com/votrepage" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a> -->
      </div>

      <div class="links-section">
        <h4>Nos Pages</h4>
        <ul>
          <li><a href="https://linktr.ee/aston_cigarette_electronique">Link Tree</a></li>
          <!-- <li><router-link to="/marques">Nos Magasins</router-link></li> -->
          <li><router-link to="/guide">Notre Guide</router-link></li>
        </ul>
      </div>
    </div>

    <div class="copyright">
      <p><strong>FUMER TUE – <a href="https://tabac-info-service.fr">https://tabac-info-service.fr</a> – 39 89</strong></p>
      <p>Moyens de paiement : Espèces, CB (Visa, Mastercard).</p>
      <ul class="footer-links">
        <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
        <li><router-link to="/politique-confidentialite">Politique de confidentialité</router-link></li>
      </ul>
      <p>&copy; {{ yearRange }} Aston Vapote - Cigarette Electronique</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    yearRange() {
      const currentYear = new Date().getFullYear();
      return currentYear === 2025 ? '2025' : `2025–${currentYear}`;
    }
  }
};
</script>

<style scoped>
footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 50px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
}

.contact-section, .social-section, .links-section {
  flex: 1;
  margin: 10px;
}

.contact-section h4, .links-section h4 {
  color: #fff;
  margin-bottom: 10px;
}

.contact-section p {
  margin: 5px 0;
}

.contact-section i {
  margin-right: 5px;
}

.social-section a {
  color: #fff;
  font-size: 1.5rem;
  margin: 0 10px;
  transition: color 0.3s;
}

.social-section a:hover {
  color: #ff6b6b;
}

.links-section ul {
  list-style-type: none;
  padding: 0;
}

.links-section ul li {
  margin: 5px 0;
}

/* Harmonisation des liens */
.contact-section a,
.links-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-section a:hover,
.links-section ul li a:hover {
  color: #ff6b6b;
}

.copyright {
  margin-top: 20px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .contact-section, .social-section, .links-section {
    margin: 15px 0;
  }
}

/* Liste dans la section copyright */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.footer-links li {
  display: inline;
}

.footer-links a,footer a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ff6b6b;
}


</style>
