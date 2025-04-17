<template>
  <div id="app">
    <!-- Pop-up vérification d'âge -->
    <AgePopup />

    <!-- Header affiché sur toutes les pages -->
    <HeaderComponent />

    <!-- Contenu des pages -->
    <router-view />

    <!-- Footer affiché sur toutes les pages -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AgePopup from '@/components/AgePopup.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    AgePopup
  }
};
</script>
