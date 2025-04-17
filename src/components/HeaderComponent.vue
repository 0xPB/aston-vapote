<template>
  <nav>
    <div class="logo">
      <router-link to="/produits">
        <img src="@/assets/images/logo.png" alt="Logo Aston Cigarette" class="logo-img" />
      </router-link>
    </div>
    <div class="menu-toggle" @click="toggleMenu" aria-label="Menu">
      <i v-if="!isMenuOpen" class="fas fa-bars"></i>
      <i v-else class="fas fa-times"></i>
    </div>
    <ul :class="{ active: isMenuOpen }">
      <li><router-link to="/produits">Produits</router-link></li>
      <li><router-link to="/guide">Guide</router-link></li>
      <li><router-link to="/marques">Marques</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/agence">Agence</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      console.log("Menu ouvert :", this.isMenuOpen);
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #c0392b;
  color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 60px;
  z-index: 10; /* Pour que le nav reste au-dessus */
}

.logo-img {
  height: 60px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.8rem;
  flex-direction: row;
  background: transparent;
  width: auto;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s, transform 0.3s;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.3rem 0.5rem;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #fff;
  opacity: 0.7;
}

.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #fff;
  transition: transform 0.3s ease;
}

.menu-toggle i {
  transition: opacity 0.3s ease;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #c0392b;
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    display: block;
    padding: 10px;
    z-index: 1000; /* Très haut pour passer devant tout */
  }

  nav ul.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
