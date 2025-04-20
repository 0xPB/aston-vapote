<template>
  <div class="construction-page">
    <h1>🚧 Site en construction 🚧</h1>
    <p>Ce site est temporairement inaccessible. Veuillez entrer un mot de passe pour y accéder :</p>

    <div class="input-container">
      <input
          type="password"
          v-model="password"
          placeholder="Mot de passe"
          @keyup.enter="checkPassword"
      />
      <button @click="checkPassword">Accéder au site</button>
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      error: ''
    };
  },
  methods: {
    checkPassword() {
      const validPassword = 'vape2025'; // 🔒 Change le mot de passe ici
      if (this.password === validPassword) {
        this.$emit('authenticated');
      } else {
        this.error = 'Mot de passe incorrect.';
      }
    }
  }
};
</script>

<style scoped>
.construction-page {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
}

input {
  padding: 10px;
  width: 250px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 15px;
}
</style>
