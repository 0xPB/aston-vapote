<template>
  <div id="app">
    <!-- Header affiché sur toutes les pages sauf la page de vérification d'âge -->
    <HeaderComponent v-if="$route.path !== '/'" />

    <!-- Contenu de la page -->
    <router-view />

    <!-- Footer affiché sur toutes les pages -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  created() {
    const isAgeVerified = localStorage.getItem('isAgeVerified');
    if (!isAgeVerified && this.$route.path !== '/') {
      this.$router.push('/');
    }
  }
};
</script>

<style>
/* Tu peux ajouter ici des styles globaux si besoin */
</style>
