<template>
  <div class="products-page">
    <main>
      <h2>Nos Produits</h2>
      <div class="card-container">
        <div
            class="card"
            v-for="(product, index) in products"
            :key="index"
            :class="{ 'fade-in': true }"
            :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div
              v-if="product.badge"
              :class="['badge', product.badge === 'BEST SELLER' ? 'best-seller' : 'new']"
          >
            {{ product.badge }}
          </div>
          <img :src="productImage" :alt="product.alt" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <button class="cta-btn">Découvrir</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import productsData from '@/assets/data/products.json';
import productImage from '@/assets/images/produit.png';

export default {
  name: 'ProductsPage',
  data() {
    return {
      products: productsData,
      productImage
    };
  }
};
</script>

<style scoped>

.products-page {
  padding: 1.5rem;
  background-color: #f9f9f9;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
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

.cta-btn {
  background-color: #e30613;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-btn:hover {
  background-color: #c00510;
}

.badge {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 12px;
  z-index: 1;
  color: white;
}

.badge.new {
  background-color: #e30613;
}

.badge.best-seller {
  background-color: #6a0dad;
}
</style>
