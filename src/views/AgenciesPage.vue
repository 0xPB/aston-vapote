<template>
  <div>
    <main class="etabs-main">
      <h2>Nos établissements</h2>
      <p class="intro">
        Retrouvez toutes nos agences Aston Cigarette Électronique à travers la région.
        Chaque boutique vous accueille avec la même passion et qualité de service.
      </p>

      <div class="cards-container">
        <div class="etab-card" v-for="etab in etablissements" :key="etab.id">
          <img :src="etab.image" alt="Photo de l'établissement" />
          <h3>{{ etab.nom }}</h3>
          <p><strong>Adresse :</strong> {{ etab.adresse }}</p>
          <p><strong>Horaires :</strong></p>
          <ul>
            <li v-for="(horaire, jour) in etab.horaires" :key="jour">
              {{ jour }} : {{ horaire }}
            </li>
          </ul>
          <div class="map-buttons">
            <a :href="etab.googleMaps" target="_blank" class="map-btn">Maps</a>
            <a :href="etab.waze" target="_blank" class="map-btn">Waze</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>


export default {
  data() {
    return {
      etablissements: [
        {
          id: 1,
          nom: 'Agence Eysines',
          adresse: '19 avenue du Médoc, 33320 Eysines',
          image: require('@/assets/images/local-placeholder.jpg'),
          horaires: {
            Lundi: '10:00 - 19:00',
            Mardi: '10:00 - 19:00',
            Mercredi: '10:00 - 19:00',
            Jeudi: '10:00 - 19:00',
            Vendredi: '10:00 - 19:00',
            Samedi: '10:00 - 19:00',
            Dimanche: 'Fermé'
          },
          googleMaps:
              'https://www.google.com/maps/dir/?api=1&destination=19+avenue+du+Médoc,+33320+Eysines',
          waze:
              'https://waze.com/ul?ll=44.88363637107053,-0.629067923825167&navigate=yes'
        }
        // Tu peux ajouter d'autres agences ici si besoin
      ]
    }
  }
}
</script>

<style scoped>
.etabs-main {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.intro {
  margin-bottom: 30px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.etab-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.etab-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.map-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.map-btn {
  background-color: #cc0000;
  color: white;
  padding: 8px 14px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.map-btn:hover {
  background-color: #990000;
}
</style>
