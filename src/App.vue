<template>
  <div id="app">
    <!-- Si accès autorisé, on affiche le vrai site -->
    <template v-if="accessGranted">
      <!-- Pop-up vérification d'âge -->
      <AgePopup />

      <!-- Header affiché sur toutes les pages -->
      <HeaderComponent />

      <!-- Contenu des pages -->
      <router-view />

      <!-- Footer affiché sur toutes les pages -->
      <FooterComponent />

      <!-- Bandeau RGPD cookie -->
      <CookieConsent />
    </template>

    <!-- Sinon, on affiche la page "site en construction" avec mot de passe -->
    <UnderConstruction v-else @authenticated="accessGranted = true" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AgePopup from '@/components/AgePopup.vue';
import CookieConsent from '@/components/CookieConsent.vue';
import UnderConstruction from '@/components/UnderConstruction.vue'; // à ajouter

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    AgePopup,
    CookieConsent,
    UnderConstruction
  },
  data() {
    return {
      accessGranted: false
    };
  }
};
</script>

<style>
/* Évite le débordement horizontal */
* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
</style>
