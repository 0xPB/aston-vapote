<template>
  <div>
    <main>
      <h2>Guide de sélection de cigarette électronique</h2>
      <p class="intro">
        Choisir la bonne cigarette électronique peut être un défi, surtout si vous êtes nouveau dans le monde de la cigarette électronique.
        Voici nos conseils, présentés sous forme de cartes claires et accessibles :
      </p>

      <div class="card-container">
        <div class="card" v-for="step in guideSteps" :key="step.title">
          <img :src="step.image" :alt="step.title" />
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
export default {
  data() {
    return {
      guideSteps: [
        {
          title: 'Déterminez votre niveau',
          description: 'Débutant ? Optez pour un kit simple et complet. Idéal pour se lancer sereinement.',
          image: 'https://via.placeholder.com/150?text=Débutant'
        },
        {
          title: 'Type de cigarette electronique',
          description: 'MTL pour un tirage serré, DTL pour une inhalation directe pleine de vapeur.',
          image: 'https://via.placeholder.com/150?text=MTL+vs+DTL'
        },
        {
          title: 'Autonomie de la batterie',
          description: 'Si vous vapotez souvent, privilégiez une batterie de grande capacité (2000 mAh ou +).',
          image: 'https://via.placeholder.com/150?text=Batterie'
        },
        {
          title: 'Type de résistance',
          description: '≥ 1 ohm pour une cigarette electronique discrète, < 1 ohm pour une vapeur dense et intense.',
          image: 'https://via.placeholder.com/150?text=Résistance'
        },
        {
          title: 'Design & ergonomie',
          description: 'Choisissez un modèle agréable en main et visuellement à votre goût.',
          image: 'https://via.placeholder.com/150?text=Design'
        },
        {
          title: 'Fonctionnalités utiles',
          description: 'Affichage écran, réglages de puissance, anti-fuite... à vous de choisir ce qui compte.',
          image: 'https://via.placeholder.com/150?text=Fonctionnalités'
        },
        {
          title: 'Budget',
          description: 'Un bon kit démarre autour de 30-50€. Attention aux modèles trop bon marché.',
          image: 'https://via.placeholder.com/150?text=Budget'
        }
      ]
    };
  }
};
</script>

<style scoped>
@import '../assets/styles/styles.css';

h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.intro {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #444;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card h3 {
  color: #c00;
  margin-bottom: 1rem;
}

.card img {
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
  object-fit: cover;
}

.conclusion {
  text-align: center;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.05rem;
  color: #990000;
}
</style>
