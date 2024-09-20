<template>
  <div class="catalogue">
  <h1>Vêtements de Garçon</h1>
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
  name: "VetementsGarçon",
  data() {
    return {
      clothes: [
        {
          id: 1,
       name: "Vêtement d'été pour garçon",
description: "Un ensemble décontracté et confortable, parfait pour les journées chaudes.",
          price: "A partir de 29.99",
          image: "CatalogueGarçon/été1.jpg",
          additionalImages: [
      "CatalogueGarçon/été1.jpg",
      "CatalogueGarçon/été2.jpg",
      "CatalogueGarçon/été3.webp",
      "CatalogueGarçon/été4.jpg",
      "CatalogueGarçon/été5.jpg",
      "CatalogueGarçon/été6.jpg",
      "CatalogueGarçon/été7.webp",
      "CatalogueGarçon/été8.avif",
      "CatalogueGarçon/été9.webp",
      "CatalogueGarçon/été10.jpg",
      "CatalogueGarçon/été11.webp",
      "CatalogueGarçon/été12.webp",
  
          ],
        },
        {
          id: 2,
          name: "Ensemble de vêtements pour garçon",
          description: "Un ensemble adorable pour les nouveau-nés.",
          price: "A partir de 25.99",
          image: "CatalogueGarçon/combi1.jpeg",
          additionalImages: [
            "CatalogueGarçon/combi2.jpg",
            "CatalogueGarçon/combi3.webp",
            "CatalogueGarçon/combi4.webp",
            "CatalogueGarçon/combi5.webp",
            "CatalogueGarçon/combi6.webp",
            "CatalogueGarçon/combi7.webp",
            "CatalogueGarçon/comni8.jpg",
            "CatalogueGarçon/combi9.jpeg",
            "CatalogueGarçon/combi10.webp",
          ],
        },
        {
          id: 3,
          name: "Vêtements d'anniversaire pour garçon",
          description: "Une tenue festive et élégante pour célébrer les anniversaires",
          price: "A partir de 50.99",
          image: "CatalogueGarçon/anniv1.jpg",
          additionalImages: [
            "CatalogueGarçon/anniv2.webp",
            "CatalogueGarçon/anniv3.webp",
            "CatalogueGarçon/anniv4.avif",
            "CatalogueGarçon/anniv5.avif",


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
  justify-content: space-around; /* Espacement uniforme autour des cartes */
  flex-wrap: wrap; /* Permet aux cartes de passer à la ligne si nécessaire */
}

.clothes-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 1200px; /* Ajuste la largeur des cartes selon tes besoins */
  display: flex;
  flex-direction: column; /* Les éléments dans chaque carte s'affichent en colonne */
  gap: 10px; /* Espace entre les éléments internes */
  margin: 10px; /* Espace autour de chaque carte */
}

.main-image-container {
  position: relative;
  width: 100%;
  height: 270px; /* Ajuste la hauteur pour la taille désirée */
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
  width: 160px; /* Taille des icônes, ajustable selon tes besoins */
  height: 150px;
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
</style>










 <!-- /* <style scoped>
.catalogue {
  padding: 20px;
}

.clothes-grid {
  display: flex;
  flex-wrap: wrap; /* Permet aux cartes de passer à la ligne suivante si nécessaire */ -->
  <!-- /* gap: 0px; /* Espace entre les cartes */
  /* justify-content: flex-start; Aligne les cartes à gauche */
/* } */

/* .clothes-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;  */
  /* display: flex;
  flex-direction: column; /* Les éléments dans chaque carte s'affichent en colonne */
  /* gap: 10px; Espace entre les éléments internes */
/* }

.main-image-container {
  position: relative;
  width: 100%;
  height: 200px; /* Ajuste la hauteur pour la taille désirée */
  /* overflow: hidden;
  display: flex;
  justify-content: center; /* Centre l'image principale horizontalement */
  /* align-items: center; Centre l'image principale verticalement */
/* } */ 

/* .clothes-image {
  width: auto;
  height: 100%; /* Ajuste la hauteur à 100% du conteneur */
  /* object-fit: cover; /* Assure que l'image remplit le conteneur sans déformation */
  /* transition: transform 0.3s ease;
}  */ 

/* .additional-images {
  display: flex;
  flex-direction: row; /* Affichage horizontal des images supplémentaires */
  /* gap: 20px; /* Espace entre les icônes */
  /* padding: 10px;
  overflow-x: auto; Permet le défilement horizontal si les images débordent */
/* }

.additional-image {
  width: 80px; 
  height: 80px;
  object-fit: cover; */
  /* cursor: pointer;
  transition: transform 0.3s ease; 
}

.additional-image:hover {
  transform: scale(1.1); 
}

.clothes-info {
  padding: 10px;
}

.price {
  font-weight: bold;
  color: #e74c3c;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>  */   -->
