<template>
  <div class="overlay" v-if="!isVerified">
    <div class="popup">
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
  data() {
    return {
      isVerified: false
    };
  },
  mounted() {
    this.isVerified = localStorage.getItem('isAgeVerified') === 'true';
  },
  methods: {
    verify(answer) {
      if (answer) {
        localStorage.setItem('isAgeVerified', 'true');
        this.isVerified = true;
      } else {
        window.location.href = 'https://www.google.fr';
      }
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup {
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
