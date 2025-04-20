<template>
  <div class="guide-page">
    <main>
      <h2>Guide de sélection de cigarette électronique</h2>
      <p class="intro">
        Choisir la bonne cigarette électronique peut être un défi, surtout si vous êtes nouveau dans le monde de la cigarette électronique.
        Voici nos conseils, présentés sous forme de cartes claires et accessibles :
      </p>

      <div class="card-container">
        <div
            class="card fade-in"
            v-for="(step, index) in guideSteps"
            :key="index"
            :style="{ animationDelay: `${index * 100}ms` }"
        >
          <img :src="guideImage" :alt="step.title" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>

      <p class="conclusion">
        💡 N'hésitez pas à demander conseil en boutique spécialisée ou à consulter des avis pour faire le bon choix !
      </p>
    </main>
  </div>
</template>

<script>
import guideSteps from '@/assets/data/guide.json';
import guideImage from '@/assets/images/produit.png';

export default {
  name: 'GuidePage',
  data() {
    return {
      guideSteps,
      guideImage
    };
  }
};
</script>

<style scoped>
.guide-page {
  padding: 1.5rem;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #000;
}

.intro {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #444;
}

.card-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 600px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  max-width: 140px;
  height: auto;
  margin: 0 auto 1rem auto;
  border-radius: 10px;
  object-fit: cover;
}

.card h3 {
  color: #e30613;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.card p {
  color: #333;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  min-height: 48px;
}

.conclusion {
  text-align: center;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.05rem;
  color: #990000;
}

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
</style>
