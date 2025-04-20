<template>
  <footer class="footer-wrapper">
    <!-- Boutons itinéraires -->
    <div class="map-buttons">
      <a href="https://www.google.com/maps/dir/?api=1&destination=19+avenue+du+Médoc,+33320+Eysines" target="_blank" class="map-btn">
        📍 Itinéraire Google Maps
      </a>
      <a href="https://waze.com/ul?ll=44.88363637107053,-0.629067923825167&navigate=yes" target="_blank" class="map-btn">
        🚗 Itinéraire Waze
      </a>
    </div>

    <div class="footer-content">
      <div class="footer-section contact">
        <h4>Contactez-nous</h4>
        <ul>
          <li><a href="mailto:aston.martine33@gmail.com"><i class="fas fa-envelope"></i> Envoyez un email</a></li>
          <li><a href="tel:+33981398552"><i class="fas fa-phone-alt"></i> Appelez-nous</a></li>
          <li><a href="https://maps.app.goo.gl/P5XwT8TtuTiZSf486" target="_blank"><i class="fas fa-map-marker-alt"></i> 19 avenue du Médoc, Eysines</a></li>
          <li><router-link to="/contact"><i class="fas fa-info-circle"></i> Formulaire de contact</router-link></li>
        </ul>
        <div class="horaires">
          <h5>Horaires d'ouverture</h5>
          <ul>
            <li>Lundi - Samedi : 10:00 - 19:00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>
      </div>

      <div class="footer-section social">
        <h4>Suivez-nous</h4>
        <a href="https://www.facebook.com/astonvapote" target="_blank" class="white-link">
          <i class="fab fa-facebook-f"></i> Notre page Facebook
        </a>
      </div>

      <div class="footer-section links">
        <h4>Nos Pages</h4>
        <ul>
          <li><router-link to="/produits">Nos Produits</router-link></li>
          <li><router-link to="/guide">Notre Guide</router-link></li>
          <li><router-link to="/marques">Nos Marques</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/agence">Notre Boutique</router-link></li>
        </ul>
      </div>
    </div>

    <div class="copyright">
      <p>Moyens de paiement : Espèces, CB (Visa, Mastercard).</p>
      <ul class="footer-links">
        <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
        <li><router-link to="/politique-confidentialite">Politique de confidentialité</router-link></li>
        <li><a href="#" @click.prevent="showCookieBanner">Gérer les cookies</a></li>
      </ul>
      <p>&copy; {{ yearRange }} Aston Vapote - Cigarette Électronique</p>
    </div>

    <div class="bandeau-warning">
      🚫 Interdit aux mineurs – Vente de produits contenant de la nicotine réservée aux majeurs. FUMER TUE –
      <a href="https://tabac-info-service.fr" target="_blank">tabac-info-service.fr</a> –
      <a href="tel:3989">39 89</a>
    </div>

    <!-- Bannière de cookies -->
    <CookieConsent ref="cookieConsent" />
  </footer>
</template>

<script>
import CookieConsent from './CookieConsent.vue';

export default {
  name: "FooterComponent",
  components: {
    CookieConsent
  },
  computed: {
    yearRange() {
      const currentYear = new Date().getFullYear();
      return currentYear === 2025 ? "2025" : `2025–${currentYear}`;
    }
  },
  methods: {
    showCookieBanner() {
      this.$refs.cookieConsent.showBanner = true;
    }
  }
};
</script>
<style scoped>
.footer-wrapper {
  background-color: #c0392b;
  color: #fff;
  padding: 2rem 1rem 0;
  text-align: center;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li,
.footer-section a {
  color: #fff;
  text-decoration: none;
  display: block;
  margin: 0.4rem 0;
}

.footer-section a:hover {
  text-decoration: underline;
}

.map-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.map-btn {
  background: #fff;
  color: #c0392b;
  border: 2px solid #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.map-btn:hover {
  background: transparent;
  color: #fff;
}

.horaires h5 {
  margin-top: 1rem;
  font-size: 1rem;
  color: #fff;
}

.horaires ul {
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
  margin: 0.5rem 0 0;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.footer-links a {
  font-size: 0.95rem;
  color: #fff;
}

.copyright {
  font-size: 0.9rem;
  padding-bottom: 1rem;
}

.bandeau-warning {
  background-color: #fff;
  color: #c0392b;
  font-weight: bold;
  padding: 1rem;
  font-size: 0.95rem;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
}

.bandeau-warning a {
  color: #c0392b;
  font-weight: bold;
  text-decoration: underline;
}

.bandeau-warning a:hover {
  color: #922b21;
}

/* ✅ CSS pour la bannière de cookies */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #222;
  color: #fff;
  padding: 1rem;
  text-align: center;
  z-index: 9999;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.cookie-banner p {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.buttons button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttons button:first-child {
  background-color: #28a745;
  color: #fff;
}

.buttons button:last-child {
  background-color: #dc3545;
  color: #fff;
}

</style>
