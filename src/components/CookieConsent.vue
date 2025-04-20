<template>
  <div v-if="showBanner" class="cookie-banner">
    <p>Nous utilisons des cookies pour améliorer votre expérience et mieux comprendre vos besoins. Vous pouvez refuser à tout moment.</p>
    <div class="buttons">
      <button @click="acceptCookies">Accepter</button>
      <button @click="declineCookies">Refuser</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      showBanner: false
    };
  },
  mounted() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.showBanner = true;
    } else if (consent === 'accepted') {
      this.loadAnalytics();
    }
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookieConsent', 'accepted');
      this.showBanner = false;
      this.loadAnalytics();
    },
    declineCookies() {
      localStorage.setItem('cookieConsent', 'declined');
      this.showBanner = false;
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
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #222;
  color: #fff;
  padding: 1rem;
  text-align: center;
  z-index: 9999;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.cookie-banner p {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.buttons button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttons button:first-child {
  background-color: #28a745;
  color: #fff;
}

.buttons button:last-child {
  background-color: #dc3545;
  color: #fff;
}
</style>
