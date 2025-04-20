<template>
  <div v-if="!isVerified" class="age-overlay">
    <div class="age-popup">
      <h2>Aston Cigarette Électronique</h2>
      <p>Ce site est réservé aux personnes majeures. Êtes-vous majeur(e) ?</p>
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
    console.log('🎉 AgePopup monté');
    this.isVerified = localStorage.getItem('isAgeVerified') === 'true';
    if (!this.isVerified) {
      document.body.style.overflow = 'hidden';
    }
  },
  methods: {
    verify(answer) {
      if (answer) {
        localStorage.setItem('isAgeVerified', 'true');
        this.isVerified = true;
        document.body.style.overflow = ''; // réactive scroll
      } else {
        window.location.href = 'https://www.google.fr';
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
