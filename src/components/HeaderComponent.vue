<template>
  <nav>
    <div class="logo">
      <router-link to="/produits">
        <img src="@/assets/images/logo.png" alt="Logo Aston Cigarette" class="logo-img" />
      </router-link>
    </div>
    <div class="menu-toggle" @click="toggleMenu" aria-label="Menu">
      <i class="fas fa-bars"></i>
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
  background-color: #c00;
  color: #fff;
  padding: 0.5rem 1rem; /* réduit la hauteur */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 60px; /* hauteur fixe */
}

.logo-img {
  height: 60px;
  width: auto;
  display: block;
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
  color: #ffddd5;
}

.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #c00;
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    display: block;
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
