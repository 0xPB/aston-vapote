<template>
  <div>
    <main>
      <h2 class="fade-in" style="animation-delay: 0ms;">Contactez-nous</h2>

      <div class="fade-in" style="animation-delay: 100ms; text-align: center; margin-bottom: 20px;">
        <p>Vous pouvez aussi nous contacter via notre page Facebook :</p>
        <a
            href="https://www.facebook.com/astonvapote"
            target="_blank"
            class="fb-contact-btn"
        >
          📩 Nous écrire sur Facebook
        </a>
      </div>

      <form @submit.prevent="submitForm" class="fade-in" style="animation-delay: 200ms;">
        <div class="form-group">
          <label for="nom">Nom *</label>
          <input type="text" id="nom" v-model="nom" required placeholder="Votre nom complet" />
        </div>

        <div class="form-group">
          <label for="prenom">Prénom *</label>
          <input type="text" id="prenom" v-model="prenom" required placeholder="Votre prénom" />
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" v-model="email" required placeholder="exemple@domaine.com" />
        </div>

        <div class="form-group">
          <label for="telephone">Téléphone</label>
          <input type="tel" id="telephone" v-model="telephone" placeholder="Ex : 06 12 34 56 78" />
        </div>

        <div class="form-group">
          <label for="sujet">Sujet *</label>
          <select id="sujet" v-model="sujet" required>
            <option disabled value="">-- Sélectionnez un sujet --</option>
            <option>Demande d'information</option>
            <option>Support technique</option>
            <option>Partenariat</option>
            <option>Autre</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" v-model="message" rows="5" required placeholder="Votre message ici..."></textarea>
        </div>

        <div class="form-group checkbox-group">
          <input
              type="checkbox"
              id="acceptConditions"
              v-model="acceptConditions"
              required
          />
          <label for="acceptConditions">J’accepte les conditions d’utilisation *</label>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: '',
      acceptConditions: false
    };
  },
  methods: {
    submitForm() {
      if (this.acceptConditions) {
        alert('Formulaire soumis avec succès !');
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.telephone = '';
        this.sujet = '';
        this.message = '';
        this.acceptConditions = false;
      } else {
        alert('Veuillez accepter les conditions d’utilisation.');
      }
    }
  }
};
</script>

<style scoped>
@import '../assets/styles/styles.css';

.fade-in {
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

form {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form .form-group {
  margin-bottom: 15px;
}

form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

form input[type="text"],
form input[type="email"],
form input[type="tel"],
form select,
form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

form textarea {
  resize: vertical;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.checkbox-group input[type="checkbox"] {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.checkbox-group label {
  margin: 0;
  font-weight: normal;
}

form button {
  background-color: #c00;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #900;
}

.fb-contact-btn {
  display: inline-block;
  background-color: #1877f2;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.fb-contact-btn:hover {
  background-color: #125ecf;
}
</style>
