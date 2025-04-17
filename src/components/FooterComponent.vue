<template>
  <footer>
    <!-- Boutons itinéraires -->
    <div class="map-buttons fade-in">
      <a
          href="https://www.google.com/maps/dir/?api=1&destination=19+avenue+du+Médoc,+33320+Eysines"
          target="_blank"
          class="map-btn"
      >
        📍 Itinéraire Google Maps
      </a>
      <a
          href="https://waze.com/ul?ll=44.88363637107053,-0.629067923825167&navigate=yes"
          target="_blank"
          class="map-btn"
      >
        🚗 Itinéraire Waze
      </a>
    </div>

    <!-- Contenu principal -->
    <div class="footer-content fade-in">
      <!-- Contact -->
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
            <i class="fas fa-map-marker-alt"></i> 19 avenue du Médoc, Eysines
          </a>
        </p>

        <div class="horaires">
          <h5>Horaires d'ouverture</h5>
          <ul>
            <li>Lundi - Samedi : 10:00 - 19:00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="social-section">
        <h4>Suivez-nous</h4>
        <a
            href="https://www.facebook.com/astonvapote"
            target="_blank"
            aria-label="Facebook"
            class="white-link"
        >
          <i class="fab fa-facebook-f"></i> Notre page Facebook
        </a>
      </div>

      <!-- Liens -->
      <div class="links-section">
        <h4>Nos Pages</h4>
        <ul>
          <li>
            <a href="https://linktr.ee/aston_cigarette_electronique" target="_blank">Notre Linktree</a>
          </li>
          <li><router-link to="/guide">Notre Guide</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Logo Aston -->
    <div class="logo-section fade-in">
      <img src="@/assets/images/logo.png" alt="Logo Aston" />
    </div>

    <!-- Mentions légales -->
    <div class="copyright fade-in">
      <p>Moyens de paiement : Espèces, CB (Visa, Mastercard).</p>
      <ul class="footer-links">
        <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
        <li><router-link to="/politique-confidentialite">Politique de confidentialité</router-link></li>
      </ul>
      <p>&copy; {{ yearRange }} Aston Vapote - Cigarette Électronique</p>
    </div>

    <!-- Bandeau mineurs -->
    <div class="bandeau-warning">
      🚫 Interdit aux mineurs – Vente de produits contenant de la nicotine réservée aux majeurs. FUMER TUE –
      <a href="https://tabac-info-service.fr" target="_blank">https://tabac-info-service.fr</a> – 39 89
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    yearRange() {
      const currentYear = new Date().getFullYear();
      return currentYear === 2025 ? "2025" : `2025–${currentYear}`;
    }
  }
};
</script>

<style scoped>
footer {
  background-color: #1f2c3b;
  color: #f5f5f5;
  padding: 40px 20px 0;
  text-align: center;
  //margin-top: 100px;
}

/* Animation fade-in */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Boutons itinéraires */
.map-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}

.map-btn {
  background: transparent;
  border: 2px solid #e30613;
  color: #fff;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  max-width: 300px;
  width: 90%;
}

.map-btn:hover {
  background-color: #e30613;
  color: #fff;
}

/* Sections principales */
.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
}

.contact-section,
.social-section,
.links-section {
  flex: 1 1 280px;
  text-align: left;
}

.contact-section h4,
.social-section h4,
.links-section h4 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #fff;
}

.contact-section a,
.links-section a,
.footer-links a,
.white-link {
  color: #f5f5f5;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-section a:hover,
.links-section a:hover,
.footer-links a:hover,
.white-link:hover {
  color: #ff6b6b;
}

.contact-section p,
.links-section ul li {
  margin: 6px 0;
  line-height: 1.5;
}

.contact-section i,
.social-section i {
  margin-right: 6px;
}

.horaires h5 {
  margin-top: 15px;
  font-size: 1rem;
  color: #ccc;
}

.horaires ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
}

.social-section a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  margin-top: 10px;
}

.links-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-section ul li {
  margin-bottom: 8px;
}

/* Logo Aston */
.logo-section {
  margin: 30px 0 20px;
}

.logo-section img {
  width: 80px;
  height: auto;
}

/* Mentions légales */
.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  margin: 10px 0 0;
}

.footer-links li {
  display: inline;
}

.footer-links a {
  font-size: 0.95rem;
}

.copyright {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 20px;
}

/* Bandeau rouge */
.bandeau-warning {
  background-color: #e30613;
  color: #fff;
  font-weight: bold;
  padding: 14px 20px;
  font-size: 0.95rem;
  line-height: 1.6;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.bandeau-warning a {
  color: #fff;
  font-weight: bold;
  text-decoration: underline;
}

.bandeau-warning a:hover {
  color: #ffeaea;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-section,
  .social-section,
  .links-section {
    text-align: center;
  }

  .map-buttons {
    flex-direction: column;
  }
}
</style>
