<template>
  <div>
    <main>
      <h2 class="fade-in" style="animation-delay: 0ms;">Bienvenue chez Aston Cigarette Électronique</h2>
      <p class="fade-in" style="animation-delay: 100ms;">
        Située à Eysines, Aston Cigarette Électronique est votre boutique de référence pour tout ce qui touche à la cigarette électronique.
        Nous proposons un large choix de cigarettes électroniques, e-liquides, accessoires et conseils personnalisés pour
        vous accompagner dans votre transition ou votre quotidien de vapoteur. Notre équipe passionnée est à votre écoute
        pour vous proposer des produits de qualité adaptés à vos besoins, que vous soyez débutant ou expérimenté.
      </p>

      <div class="fade-in" style="animation-delay: 200ms; margin: 30px 0;">
        <img src="../assets/images/local-placeholder.jpg" alt="Photo des locaux" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px;" />
      </div>

      <!-- Carte Google Maps désactivée -->
      <!--
      <div id="map" class="fade-in" style="animation-delay: 300ms;">
        <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
      </div>
      -->

      <div id="avis" class="avis-container fade-in" style="animation-delay: 500ms;">
        <h3>Avis de nos clients</h3>
        <div class="avis-slider">
          <button @click="prevAvis">⬅️</button>
          <div class="avis-content">
            <p>{{ '⭐️'.repeat(currentAvis.note) }}</p>
            <p>{{ currentAvis.commentaire }}</p>
          </div>
          <button @click="nextAvis">➡️</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ratings from '../assets/data/ratings.json';

export default {
  data() {
    return {
      avisClients: ratings,
      currentIndex: 0,
      intervalId: null
    };
  },
  computed: {
    currentAvis() {
      return this.avisClients[this.currentIndex] || { commentaire: '', note: 0 };
    }
  },
  methods: {
    nextAvis() {
      this.currentIndex = (this.currentIndex + 1) % this.avisClients.length;
      this.restartInterval();
    },
    prevAvis() {
      this.currentIndex = (this.currentIndex - 1 + this.avisClients.length) % this.avisClients.length;
      this.restartInterval();
    },
    restartInterval() {
      clearInterval(this.intervalId);
      this.startAutoRotation();
    },
    startAutoRotation() {
      this.intervalId = setInterval(() => {
        this.nextAvis();
      }, 10000); // 10 secondes
    }
  },
  mounted() {
    this.startAutoRotation();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
@import '../assets/styles/styles.css';

.fade-in {
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.avis-container {
  margin-top: 30px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.avis-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.avis-content {
  max-width: 600px;
  padding: 10px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.avis-content p {
  margin: 5px 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.avis-slider button {
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
