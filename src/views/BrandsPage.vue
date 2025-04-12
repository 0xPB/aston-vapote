<template>
  <div>
    <main>
      <h2>Nos Marques Partenaires</h2>
      <p>
        Chez Aston E-Cigarette, nous travaillons avec les meilleures marques du marché
        pour vous offrir des produits de haute qualité. Voici quelques-unes des marques
        avec lesquelles nous collaborons :
      </p>
      <div class="card-container">
        <div class="card">
          <h3>GeekVape</h3>
          <p>GeekVape est une marque innovante connue pour ses cigarettes électroniques robustes et performantes comme la série Aegis, très appréciée pour leur résistance à l'eau et aux chocs.</p>
        </div>
        <div class="card">
          <h3>Voopoo</h3>
          <p>Voopoo s'est imposée grâce à ses chipsets performants et ses pods ergonomiques comme le Drag X, alliant design élégant et technologie de pointe.</p>
        </div>
        <div class="card">
          <h3>Smok</h3>
          <p>Smok est une marque emblématique du domaine de la cigarette électronique, réputée pour ses kits complets puissants et ses clearomiseurs performants comme le TFV18.</p>
        </div>
        <div class="card">
          <h3>Vaporesso</h3>
          <p>Avec ses produits à la fois fiables et stylés, Vaporesso propose des gammes pour débutants et experts, comme les célèbres XROS et Gen.</p>
        </div>
        <div class="card">
          <h3>Innokin</h3>
          <p>Innokin est une marque respectée pour ses produits simples d'utilisation et durables, idéale pour les primo-vapoteurs avec des modèles comme l'Endura T20.</p>
        </div>
        <div class="card">
          <h3>Alfaliquid</h3>
          <p>Marque française pionnière dans les e-liquides, Alfaliquid offre une large gamme de saveurs, élaborées avec des ingrédients de haute qualité et certifiés.</p>
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
</style>
