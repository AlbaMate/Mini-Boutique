<template>
  <div class="catalogue">
  <h1>Vêtements de Fille</h1>
  <div class="clothes-grid">
    <transition-group name="fade" tag="div">
      <!-- Boucle sur chaque élément de vêtements -->
      <div v-for="item in clothes" :key="item.id" class="clothes-card">
        <!-- image principale -->
        <div class="main-image-container">
          <img :src="currentImage(item)" :alt="item.name" class="clothes-image" />
        </div>
        
        <!--  images supplémentaires -->
        <div class="additional-images">
          <img 
            v-for="(img, index) in item.additionalImages" 
            :key="index" 
            :src="img" 
            :alt="item.name" 
            class="additional-image"
            @click="updateImage(item, img)" 
          />
        </div>
        
        <div class="clothes-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p class="price">{{ item.price }} €</p>
        </div>
      </div>
    </transition-group>
  </div>
</div>

</template>


<script>
export default {
  name: "VetementsFille",
  data() {
    return {
      clothes: [
        {
          id: 1,
          name: "Robe d'été pour fille",
          description: "Une robe légère et confortable, idéale pour l'été.",
          price: 29.99,
          image: "CatalogueFille/été1.webp",
          additionalImages: [
            "CatalogueFille/été2.webp",
            "CatalogueFille/été3.jpg",
            "CatalogueFille/été4.jpg",
            "CatalogueFille/été5.webp",
            "CatalogueFille/été6.jpeg",
            "CatalogueFille/été7.jpg",
            "CatalogueFille/été8.webp",
            "CatalogueFille/été9.jpg",
            "CatalogueFille/été10.webp",
            "CatalogueFille/été11.jpg",
            "CatalogueFille/été12.avif",
          ],
        },
        {
          id: 2,
          name: "Ensemble de vêtements pour bébé fille",
          description: "Un ensemble adorable pour les nouveau-nés.",
          price: 19.99,
          image: "CatalogueFille/combi1.webp",
          additionalImages: [
            "CatalogueFille/combi2.webp",
            "CatalogueFille/combi3.avif",
            "CatalogueFille/combi4.jpg",
            "CatalogueFille/combi5.jpeg",
            "CatalogueFille/combi6.jpg",
            "CatalogueFille/combi7.jpg",
            "CatalogueFille/comni8.jpg",
          ],
        },
        {
          id: 3,
          name: "Vêtements d'anniversaire pour fille",
          description: "Une tenue festive et élégante pour célébrer les anniversaires",
          price: 19.99,
          image: "CatalogueFille/robe3.avif",
          additionalImages: [
            "CatalogueFille/robe1.webp",
            "CatalogueFille/robe2.webp",
            "CatalogueFille/robe3.avif",
            "CatalogueFille/robe4.avif",
            "CatalogueFille/robe5.jpg",
          ],
        },
      ],
    };
  },
  methods: {
    updateImage(item, newImage) {
      item.image = newImage;
    },
    currentImage(item) {
      return item.image;
    },
  },
};


</script>

<style scoped>
.catalogue {
  padding: 20px;
}

.clothes-grid {
  display: flex;
  flex-wrap: wrap; /* Permet aux cartes de se repositionner si l'espace est insuffisant */
  gap: 20px; /* Ajoute de l'espace entre les cartes */
  justify-content: space-between; /* Distribue les cartes horizontalement */
}

.clothes-card {
  flex: 1 1 calc(30% - 20px); /* Chaque carte prend environ 30% de la largeur du conteneur */
  max-width: 300px; /* Largeur maximale pour chaque carte */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre portée pour chaque carte */
  border-radius: 8px; /* Coins arrondis */
  overflow: hidden; /* Cache les débordements */
  background-color: #fff; /* Couleur de fond blanche */
  transition: transform 0.3s ease; /* Transition pour l'effet de survol */
  margin-bottom: 20px; /* Ajoute de l'espace en bas pour éviter que les cartes soient collées verticalement */
}

.clothes-card:hover {
  transform: scale(1.05); /* Agrandissement léger au survol */
}

.clothes-image {
  width: 100%;
  height: auto;
}

.additional-images {
  display: flex;
  justify-content: center; /* Centre les images supplémentaires */
  gap: 10px;
  margin-top: 10px;
}

.additional-image {
  width: 50px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.additional-image:hover {
  transform: scale(1.1);
}
</style>

<!-- <style scoped>
.catalogue {
  padding: 20px;
}

.clothes-grid {
  display: flex;
  flex-wrap: wrap; /* Permet aux cartes de passer à la ligne suivante si nécessaire */
  gap: 0px; /* Espace entre les cartes */
  justify-content: flex-start; /* Aligne les cartes à gauche */
}

.clothes-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px; /* Ajuste la largeur des cartes selon tes besoins */
  display: flex;
  flex-direction: column; /* Les éléments dans chaque carte s'affichent en colonne */
  gap: 10px; /* Espace entre les éléments internes */
}

.main-image-container {
  position: relative;
  width: 100%;
  height: 200px; /* Ajuste la hauteur pour la taille désirée */
  overflow: hidden;
  display: flex;
  justify-content: center; /* Centre l'image principale horizontalement */
  align-items: center; /* Centre l'image principale verticalement */
}

.clothes-image {
  width: auto;
  height: 100%; /* Ajuste la hauteur à 100% du conteneur */
  object-fit: cover; /* Assure que l'image remplit le conteneur sans déformation */
  transition: transform 0.3s ease; /* Transition dynamique */
}

.additional-images {
  display: flex;
  flex-direction: row; /* Affichage horizontal des images supplémentaires */
  gap: 20px; /* Espace entre les icônes */
  padding: 10px;
  overflow-x: auto; /* Permet le défilement horizontal si les images débordent */
}

.additional-image {
  width: 80px; /* Taille des icônes, ajustable selon tes besoins */
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease; /* Transition dynamique */
}

.additional-image:hover {
  transform: scale(1.1); /* Légère augmentation de la taille au survol */
}

.clothes-info {
  padding: 10px;
}

.price {
  font-weight: bold;
  color: #e74c3c;
}

/* Transitions pour les images */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active dans <2.1.8 */ {
  opacity: 0;
}
</style> -->
