<template>
  <div class="brands-page">
    <main>
      <h2>Nos Marques Partenaires</h2>
      <p>
        Chez Aston E-Cigarette, nous travaillons avec les meilleures marques du marché
        pour vous offrir des produits de haute qualité. Voici quelques-unes des marques
        avec lesquelles nous collaborons :
      </p>
      <div class="card-container">
        <div
            class="card fade-in"
            v-for="(brand, index) in brands"
            :key="index"
            :style="{ animationDelay: `${index * 100}ms` }"
        >
          <img :src="brandImage" :alt="brand.name" />
          <h3>{{ brand.name }}</h3>
          <p>{{ brand.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import brandsData from '@/assets/data/brands.json';
import brandImage from '@/assets/images/produit.png';

export default {
  name: 'BrandsPage',
  data() {
    return {
      brands: brandsData,
      brandImage
    };
  }
};
</script>

<style scoped>
.brands-page {
  padding: 1.5rem;
  background-color: #ffffff;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #000;
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
