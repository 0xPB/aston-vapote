<template>
  <div v-if="!isVerified" class="age-overlay">
    <div class="age-popup">
      <h2>Aston Cigarette Électronique</h2>
      <p>
        Ce site est réservé aux personnes majeures. Êtes-vous majeur(e) ?
        <br />
        <strong>En cliquant sur "OUI", vous acceptez également l’utilisation de cookies de mesure d’audience (Google Analytics).</strong>
      </p>
      <div class="buttons">
        <button @click="verify(true)">OUI</button>
        <button @click="verify(false)">NON</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgePopup',
  data() {
    return {
      isVerified: false
    };
  },
  mounted() {
    this.isVerified = localStorage.getItem('isAgeVerified') === 'true';
    if (!this.isVerified) {
      document.body.style.overflow = 'hidden';
    } else if (localStorage.getItem('cookieConsent') === 'accepted') {
      this.loadAnalytics();
    }
  },
  methods: {
    verify(answer) {
      if (answer) {
        localStorage.setItem('isAgeVerified', 'true');
        localStorage.setItem('cookieConsent', 'accepted');
        this.loadAnalytics();
        this.isVerified = true;
        document.body.style.overflow = '';
      } else {
        window.location.href = 'https://www.google.fr';
      }
    },
    loadAnalytics() {
      if (!window.gtag) {
        const script1 = document.createElement('script');
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-F2JKZ66E4D';
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F2JKZ66E4D');
        `;
        document.head.appendChild(script2);
      }
    }
  }
};
</script>

<style scoped>
.age-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.age-popup {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.age-popup p {
  margin-top: 10px;
  font-size: 16px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #cc0000;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #990000;
}
</style>
