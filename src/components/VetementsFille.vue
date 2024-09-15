<template>
  <div class="catalogue">
    <h1>Vêtements de Fille</h1>
    <div class="clothes-grid">
      <transition-group name="fade" tag="div">
        <!-- Utilisation de v-for pour boucler sur chaque élément de vêtements -->
        <div v-for="item in clothes" :key="item.id" class="clothes-card">
          <!-- Affichage de l'image principale de chaque article -->
          <img :src="item.image" :alt="item.name" class="clothes-image" />

          <div class="clothes-info">
            <!-- Affichage des informations de chaque article -->
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <p class="price">{{ item.price }} €</p>
          </div>

          <!-- Affichage des images supplémentaires de chaque article -->
          <div class="additional-images">
            <img v-for="(img, index) in item.additionalImages" :key="index" :src="img" :alt="item.name" />
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
        // Ajoute d'autres articles de vêtements ici
        {id: 3,
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
};

</script>

<style scoped>
.catalogue {
  padding: 20px; /* Espace autour du contenu */
}

.clothes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Augmentez la taille minimale des cartes */
  gap: 30px; /* Augmente l'espace entre les cartes */
  padding: 20px; /* Padding autour de la grille pour séparer des bords */
}

.clothes-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s;
}

.clothes-card:hover {
  transform: scale(1.05); /* Effet d'agrandissement au survol */
}

.clothes-image {
  width: 100%;
  height: auto;
}

.clothes-info {
  padding: 10px;
}

.price {
  font-weight: bold;
  color: #333;
}

.additional-images img {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

</style>