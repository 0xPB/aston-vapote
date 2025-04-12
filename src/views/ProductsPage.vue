<template>
  <div>
    <main>
      <h2>Nos Produits</h2>
      <div class="card-container">
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Kit+Débutant" alt="Kit Débutant" />
          <h3>Kit Débutant</h3>
          <p>Parfait pour ceux qui commencent la cigarette électronique.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=E-liquide+Fruité" alt="E-liquide Fruité" />
          <h3>E-liquide Fruité</h3>
          <p>Une explosion de saveurs fruitées.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Accessoires" alt="Accessoires" />
          <h3>Accessoires</h3>
          <p>Tout ce dont vous avez besoin pour personnaliser votre expérience.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Kit+Avancé" alt="Kit Avancé" />
          <h3>Kit Avancé</h3>
          <p>Pour les vapoteurs expérimentés à la recherche de puissance.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Gourmand" alt="E-liquide Gourmand" />
          <h3>E-liquide Gourmand</h3>
          <p>Des saveurs sucrées comme le caramel, la vanille et les pâtisseries.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Mentholé" alt="E-liquide Mentholé" />
          <h3>E-liquide Mentholé</h3>
          <p>Une fraîcheur intense pour un effet glacé garanti.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Batteries" alt="Batteries & Chargeurs" />
          <h3>Batteries & Chargeurs</h3>
          <p>Gardez vos appareils toujours prêts à l’emploi.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Résistances" alt="Résistances" />
          <h3>Résistances</h3>
          <p>Remplacez vos coils pour garder une vapeur optimale.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/150?text=Pods" alt="Pods Rechargeables" />
          <h3>Pods Rechargeables</h3>
          <p>Une alternative pratique et discrète à la cigarette classique.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/styles/styles.css';

h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card h3 {
  color: #c00;
  margin-bottom: 1rem;
}

.card img {
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
  object-fit: cover;
}
</style>
