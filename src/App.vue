<template>
  <div id="app">
    <!-- Pop-up vérification d'âge (gère l'affichage en interne) -->
    <AgePopup />

    <!-- Header affiché sur toutes les pages -->
    <HeaderComponent />

    <!-- Contenu des pages -->
    <router-view />

    <!-- Footer affiché sur toutes les pages -->
    <FooterComponent />

    <!-- Bandeau RGPD cookie -->
    <CookieConsent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AgePopup from '@/components/AgePopup.vue';
import CookieConsent from '@/components/CookieConsent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    AgePopup,
    CookieConsent
  }
};
</script>
