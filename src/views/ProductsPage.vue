<template>
  <div class="products-page">
    <h1 class="page-title">Nos Produits</h1>

    <input
        v-model="searchTerm"
        type="text"
        placeholder="Rechercher un produit..."
        class="search-bar"
    />

    <div class="products-grid">
      <div
          v-for="product in filteredProducts"
          :key="product.title"
          class="product-card"
      >
        <img
            :src="`/assets/images/${product.image}`"
            :alt="product.alt"
            class="product-image"
        />
        <div class="product-info">
          <span v-if="product.badge" class="product-badge">{{ product.badge }}</span>
          <h2 class="product-title">{{ product.title }}</h2>
          <p class="product-description">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsData from "@/assets/data/products.json"; // adapte le chemin si besoin

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
      return this.products.filter(product =>
          product.title.toLowerCase().includes(term)
      );
    }
  }
};
</script>

<style scoped>
.products-page {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.page-title {
  text-align: center;
  margin-bottom: 1rem;
}

.search-bar {
  width: 100%;
  max-width: 400px;
  margin: 1rem auto 2rem;
  padding: 10px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}

.product-card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  background: #fff;
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-info {
  margin-top: 1rem;
}

.product-badge {
  background-color: #e63946;
  color: white;
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

.product-title {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: bold;
}

.product-description {
  font-size: 0.95rem;
  color: #555;
}
</style>
