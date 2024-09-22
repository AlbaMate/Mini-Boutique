<template>
  <div class="catalogue">
    <h1>Vêtements de Fille</h1>
    <div class="clothes-grid">
      <transition-group name="fade" tag="div">
        <div v-for="item in clothes" :key="item.id" class="clothes-card">
          <!-- image principale -->
          <div class="main-image-container">
            <img 
              :src="currentImage(item)" 
              :alt="item.name" 
              class="clothes-image" 
              @click="showModal(item)" 
            />
          </div>

          <!-- images supplémentaires -->
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

    <!-- Modale pour afficher les détails -->
    <div v-if="isModalVisible" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h3>{{ selectedItem.name }}</h3>
        <img :src="currentImage(selectedItem)" :alt="selectedItem.name" class="modal-image" />
        <p>{{ selectedItem.description }}</p>
        <p><strong>Prix:</strong> {{ selectedItem.price }} €</p>
        <p><strong>Matière:</strong> Coton 100%</p>
        <p><strong>Taille:</strong> Disponible en tailles S, M, L</p>
        <p><strong>Pays de fabrication:</strong> France</p>
        <p><strong>Entretien:</strong> Lavage en machine à 30°</p>
      </div>
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
          price: "A partir de 29.99",
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
          price: "A partir de 35.99",
          image: "CatalogueFille/combi1.webp",
          additionalImages: [
            "CatalogueFille/combi2.webp",
            "CatalogueFille/combi3.avif",
            "CatalogueFille/combi4.jpg",
            "CatalogueFille/combi5.jpeg",
            "CatalogueFille/combi6.jpg",
            "CatalogueFille/combi7.jpg",
            "CatalogueFille/combi8.jpg",
          ],
        },
        {
          id: 3,
          name: "Vêtements d'anniversaire pour fille",
          description: "Une tenue festive et élégante pour célébrer les anniversaires.",
          price: "A partir de 50.99",
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
      isModalVisible: false,
      selectedItem: {},
    };
  },
  methods: {
    updateImage(item, newImage) {
      item.image = newImage;
    },
    currentImage(item) {
      return item.image;
    },
    showModal(item) {
      this.selectedItem = item;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
};
</script>

<style scoped>
.catalogue {
  padding: 20px;
}

.clothes-grid {
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
}

.clothes-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
}

.main-image-container {
  position: relative;
  width: 100%;
  height: 270px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clothes-image {
  width: auto;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer; /* Curseur cliquable */
}

.additional-images {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  overflow-x: auto;
}

.additional-image {
  width: 160px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
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

/* Styles pour la modale */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 100%;
}

.modal-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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






