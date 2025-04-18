<template>
  <div>
    <main>
      <h2 class="fade-in" style="animation-delay: 0ms;">Click & Collect</h2>

      <form @submit.prevent="demanderConfirmation" class="fade-in" style="animation-delay: 200ms;" autocomplete="off">
        <div class="form-group">
          <label for="produit">Produit *</label>
          <select id="produit" v-model="produitSelectionne">
            <option disabled value="">-- Sélectionnez un produit --</option>
            <option v-for="(produit, index) in produitsDisponibles" :key="index">
              {{ produit.title }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="quantite">Quantité *</label>
          <input type="number" id="quantite" v-model.number="quantite" min="1" placeholder="1" />
        </div>

        <button type="button" @click="ajouterProduit">Ajouter à la commande</button>

        <div v-if="produitsCommande.length > 0" style="margin-top: 20px;">
          <h3>Votre sélection :</h3>
          <table>
            <thead>
            <tr>
              <th>Produit</th>
              <th>Quantité</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in produitsCommande" :key="index">
              <td>{{ item.nom }}</td>
              <td>{{ item.quantite }}</td>
              <td><button type="button" @click="supprimerProduit(index)">❌</button></td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="form-group">
          <label for="dateRetrait">Date de retrait *</label>
          <input type="date" id="dateRetrait" v-model="dateRetrait" required />
        </div>

        <div class="form-group">
          <label for="heureRetrait">Heure de retrait *</label>
          <input type="time" id="heureRetrait" v-model="heureRetrait" required />
        </div>

        <div class="form-group">
          <label for="nom">Nom *</label>
          <input type="text" id="nom" v-model="nom" required />
        </div>

        <div class="form-group">
          <label for="prenom">Prénom *</label>
          <input type="text" id="prenom" v-model="prenom" required />
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" v-model="email" required />
        </div>

        <div class="form-group">
          <label for="telephone">Téléphone *</label>
          <input type="tel" id="telephone" v-model="telephone" required />
        </div>

        <!-- Conditions d'utilisation -->
        <p style="font-size: 0.9em; margin-top: 10px; margin-bottom: 20px; color: #555;">
          * En soumettant ce formulaire, vous acceptez que vos données soient traitées via le service EmailJS.<br />
          Ces données ne seront utilisées que pour répondre à votre commande et ne seront pas partagées avec des tiers.
        </p>

        <button type="submit">Envoyer la commande</button>
      </form>

      <!-- Modale de confirmation -->
      <div v-if="afficherConfirmation" class="modal-overlay">
        <div class="modal">
          <h3>Confirmer la commande</h3>
          <p><strong>Produits :</strong></p>
          <ul>
            <li v-for="(item, index) in produitsCommande" :key="index">{{ item.nom }} — {{ item.quantite }}</li>
          </ul>
          <p><strong>Date :</strong> {{ dateRetrait }}</p>
          <p><strong>Heure :</strong> {{ heureRetrait }}</p>
          <p><strong>Nom :</strong> {{ nom }} {{ prenom }}</p>
          <p><strong>Email :</strong> {{ email }}</p>
          <p><strong>Téléphone :</strong> {{ telephone }}</p>

          <div class="modal-actions">
            <button @click="envoyerCommande">✅ Confirmer</button>
            <button @click="afficherConfirmation = false">❌ Annuler</button>
          </div>
        </div>
      </div>

      <p v-if="confirmation" class="confirmation-message">
        ✅ Votre commande Click & Collect a bien été envoyée. Merci !
      </p>
    </main>
  </div>
</template>

<script>
import produits from '@/assets/data/products.json';
import emailjs from 'emailjs-com';

export default {
  name: 'ClickAndCollectPage',
  data() {
    return {
      produitsDisponibles: produits,
      produitSelectionne: '',
      quantite: 1,
      produitsCommande: [],
      dateRetrait: '',
      heureRetrait: '',
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      confirmation: false,
      afficherConfirmation: false
    };
  },
  methods: {
    ajouterProduit() {
      if (!this.produitSelectionne || this.quantite < 1) return;

      this.produitsCommande.push({
        nom: this.produitSelectionne,
        quantite: this.quantite
      });

      this.produitSelectionne = '';
      this.quantite = 1;
    },
    supprimerProduit(index) {
      this.produitsCommande.splice(index, 1);
    },
    demanderConfirmation() {
      if (
          !this.produitsCommande.length ||
          !this.dateRetrait ||
          !this.heureRetrait ||
          !this.nom ||
          !this.prenom ||
          !this.email ||
          !this.telephone
      ) {
        alert('Merci de remplir tous les champs obligatoires.');
        return;
      }

      this.afficherConfirmation = true;
    },
    envoyerCommande() {
      const serviceID = 'service_wm6gu8a';
      const templateID = 'template_6idygpe';
      const userID = 'lju9G0tT7TFFQnMBY';

      const produitsTexte = this.produitsCommande
          .map(item => `${item.nom} — ${item.quantite}`)
          .join('\n');

      const templateParams = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        telephone: this.telephone,
        dateRetrait: this.dateRetrait,
        heureRetrait: this.heureRetrait,
        produits: produitsTexte
      };

      emailjs.send(serviceID, templateID, templateParams, userID)
          .then(() => {
            this.confirmation = true;
            this.afficherConfirmation = false;
            this.produitsCommande = [];
            this.dateRetrait = '';
            this.heureRetrait = '';
            this.nom = '';
            this.prenom = '';
            this.email = '';
            this.telephone = '';
          })
          .catch(error => {
            console.error('Erreur EmailJS :', error);
            alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
          });
    }
  }
};
</script>

<style scoped>
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
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

form input,
form select {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ccc;
}

form button {
  margin-top: 10px;
  background-color: #c00;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #900;
}

table {
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

.confirmation-message {
  margin-top: 20px;
  color: green;
  text-align: center;
  font-weight: bold;
}

/* Modale */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
}

.modal-actions button {
  padding: 8px 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.modal-actions button:first-child {
  background-color: #28a745;
  color: white;
}

.modal-actions button:last-child {
  background-color: #dc3545;
  color: white;
}
</style>
