<template>
  <main>
    <div class="age-verification" v-if="!isVerified">
      <h1>Aston Cigarette Électronique</h1>
      <p>SI VOUS NE FUMEZ PAS, NE VAPOTEZ PAS.</p>
      <p>La vente des produits du vapotage est interdite aux mineurs. En entrant sur ce site, j’atteste sur l’honneur être majeur(e) et être autorisé(e) par la législation de mon pays à acheter des produits contenant de la nicotine.</p>
      <form @submit.prevent="verifyAge">
        <label for="age">Veuillez saisir votre date de naissance :</label>
        <div class="date-inputs">
          <select id="day" v-model="day">
            <option value="">Jour</option>
            <option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
          </select>
          <select id="month" v-model="month">
            <option value="">Mois</option>
            <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
          </select>
          <select id="year" v-model="year">
            <option value="">Année</option>
            <option v-for="i in years" :key="i" :value="i">{{ i }}</option>
          </select>
        </div>
        <button type="submit">ENTRER</button>
      </form>
      <p>Le vapotage est une transition vers une vie sans tabac puis sans dépendance. En entrant sur ce site vous acceptez nos <a href="#">mentions légales</a>.</p>
    </div>
  </main>
</template>

<script>
  export default {
  data() {
  return {
  day: '',
  month: '',
  year: '',
  months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
  years: Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i),
  isVerified: false
};
},
  created() {
  const isAgeVerified = localStorage.getItem('isAgeVerified');
  if (isAgeVerified) {
  this.$router.push('/home');
}
},
  methods: {
  verifyAge() {
  const birthDate = new Date(this.year, this.month - 1, this.day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
  age--;
}

  if (age >= 18) {
  localStorage.setItem('isAgeVerified', 'true');
  this.$router.push('/home');
} else {
  alert('Vous devez être majeur pour accéder à ce site.');
}
}
}
};
</script>

<style scoped>
main{
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
}
.age-verification {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  text-align: center;
  padding: 10px;
}

.age-verification h1 {
  font-size: 28px;
  color: #111;
  margin-bottom: 20px;
}

.age-verification p {
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 1.6;
}

form {
  margin-top: 20px;
}

form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.date-inputs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
}

select {
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

button[type="submit"] {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #cc0000;
}

a {
  text-decoration: none;
  color: #cc0000;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>