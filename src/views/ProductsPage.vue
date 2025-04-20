<template>
  <div class="products-page">
    <main>
      <h2>Nos Produits</h2>

      <input
          v-model="searchTerm"
          type="text"
          placeholder="Rechercher un produit..."
          class="search-bar"
      />

      <div class="card-container">
        <div
            v-for="product in filteredProducts"
            :key="product.title"
            class="card fade-in"
        >
          <div class="image-wrapper">
            <img
                :src="`/assets/images/products/${product.image}`"
                :alt="product.alt"
            />
            <span
                v-if="product.badge"
                :class="['product-badge', product.badgeClass]"
            >
              {{ product.badge }}
            </span>
          </div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import productsData from "@/assets/data/products.json";

export default {
  name: "ProductsPage",
  data() {
    return {
      searchTerm: "",
      products: productsData
    };
  },
  computed: {
    filteredProducts() {
      const term = this.searchTerm.toLowerCase();
      return this.products
          .map(product => ({
            ...product,
            badgeClass:
                product.badge?.toLowerCase().includes("best seller")
                    ? "badge-best"
                    : product.badge?.toLowerCase().includes("nouveau")
                        ? "badge-new"
                        : "badge-default"
          }))
          .filter(product => product.title.toLowerCase().includes(term));
    }
  }
};
</script>

<style scoped>
.products-page {
  padding: 1.5rem;
  max-width: 1200px;
  margin: auto;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #000;
}

.search-bar {
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem;
  padding: 10px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 8px;
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

.image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  width: 100%;
  max-width: 140px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: -10px;
  left: -10px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 2;
  color: white;
  background-color: #888;
}

.badge-new {
  background-color: #e63946;
}

.badge-best {
  background-color: #1d3557;
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
