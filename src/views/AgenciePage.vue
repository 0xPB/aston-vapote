<template>
  <div>
    <main>
      <h2 class="fade-in" style="animation-delay: 0ms;">Bienvenue chez Aston Cigarette Électronique</h2>
      <p class="fade-in" style="animation-delay: 100ms;">
        Située à Eysines, Aston Cigarette Électronique est votre boutique de référence pour tout ce qui touche à la cigarette électronique.
        Nous proposons un large choix de cigarettes électroniques, e-liquides, accessoires et conseils personnalisés pour
        vous accompagner dans votre transition ou votre quotidien de vapoteur. Notre équipe passionnée est à votre écoute
        pour vous proposer des produits de qualité adaptés à vos besoins, que vous soyez débutant ou expérimenté.
      </p>

      <div class="fade-in" style="animation-delay: 200ms; margin: 30px 0;">
        <img src="../assets/images/local-placeholder.jpg" alt="Photo des locaux" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px;" />
      </div>

      <div id="map" class="fade-in" style="animation-delay: 300ms;">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.718142958589!2d-0.629067923825167!3d44.88363637107053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d8ff0a1fcb15%3A0x2f7caa5e9ed4212d!2s19%20Av.%20du%20M%C3%A9doc%2C%2033320%20Eysines!5e0!3m2!1sfr!2sfr!4v1680256601621"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
      </div>

      <div id="infos" class="fade-in" style="animation-delay: 400ms;">
        <h3>Informations</h3>
        <p><strong>Adresse :</strong> 19 avenue du Médoc, 33320 Eysines, France</p>

        <div class="map-buttons">
          <a
              href="https://www.google.com/maps/dir/?api=1&destination=19+avenue+du+Médoc,+33320+Eysines"
              target="_blank"
              class="map-btn"
          >
            S'y rendre avec Maps
          </a>
          <a
              href="https://waze.com/ul?ll=44.88363637107053,-0.629067923825167&navigate=yes"
              target="_blank"
              class="map-btn"
          >
            S'y rendre avec Waze
          </a>
        </div>

        <p><strong>Horaires d'ouverture :</strong></p>
        <ul>
          <li>Lundi : 10:00 - 19:00</li>
          <li>Mardi : 10:00 - 19:00</li>
          <li>Mercredi : 10:00 - 19:00</li>
          <li>Jeudi : 10:00 - 19:00</li>
          <li>Vendredi : 10:00 - 19:00</li>
          <li>Samedi : 10:00 - 19:00</li>
          <li>Dimanche : Fermé</li>
        </ul>
      </div>

      <div id="avis" class="avis-container fade-in" style="animation-delay: 500ms;">
        <h3>Avis de nos clients</h3>
        <div
            class="avis-marquee"
            @mouseover="stopScroll"
            @mouseleave="startScroll"
            ref="avisMarquee"
        >
          <div class="avis-track" :class="{ paused: isPaused }">
            <span>⭐️⭐️⭐️⭐️⭐️ Super accueil et très bons conseils !</span>
            <span>⭐️⭐️⭐️⭐️⭐️ Boutique agréable, personnel au top !</span>
            <span>⭐️⭐️⭐️⭐️⭐️ Grand choix et toujours bien conseillé !</span>
            <span>⭐️⭐️⭐️⭐️⭐️ Service rapide et efficace !</span>
            <span>⭐️⭐️⭐️⭐️⭐️ Je recommande à 100% !</span>
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
      isPaused: false
    };
  },
  methods: {
    stopScroll() {
      this.isPaused = true;
    },
    startScroll() {
      this.isPaused = false;
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

#map {
  height: 300px;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#infos {
  margin-top: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#infos h3 {
  color: #c00;
}

.map-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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

.avis-container {
  margin-top: 30px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
}

.avis-marquee {
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
}

.avis-marquee::-webkit-scrollbar {
  height: 6px;
}

.avis-marquee::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.avis-track {
  display: inline-flex;
  gap: 50px;
  animation: scroll 30s linear infinite;
  padding-bottom: 10px;
}

.avis-track.paused {
  animation-play-state: paused;
}

.avis-track span {
  font-size: 1.1rem;
  font-weight: 500;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
