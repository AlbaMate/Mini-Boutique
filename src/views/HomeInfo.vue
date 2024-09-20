<template>
   <div id="app">
    <img alt="Vue vêtement" src="@/assets/pret-a-porter-accueil-2.jpg" class="main-image" />
  </div>
  <div class="home-info">
    <h1>Bienvenue dans notre boutique de vêtements pour enfants</h1>
    <div class="phrase-container">
      <h1>TOP SELECTION</h1>
    </div>
    <div class="image-gallery">
      <ImageCard
        v-for="(image, index) in images"
        :key="index"
        :imageSrc="image.src"
        :altText="image.alt"
        :title="image.title"
        :description="image.description"
      />
    </div>
  </div>
  
</template> 

<script>
import ImageCard from '@/components/ImageCard.vue'; // Vérifie le chemin

export default {
  name: 'HomeInfo',
  components: {
    ImageCard
  },
  data() {
    return {
      images: [
        {
          src: require('@/assets/image1.jpg'),
          alt: 'Pantalon 1',
          title: 'Pantalon 1',
          description: 'Description du pantalon 1'
        },
        {
          src: require('@/assets/image2.jpeg'),
          alt: 'Pantalon 2',
          title: 'Pantalon 2',
          description: 'Description du pantalon 2'
        },
        {
          src: require('@/assets/image3.webp'),
          alt: 'Pantalon 3',
          title: 'Pantalon 3',
          description: 'Description du pantalon 3',
        },
        {
          src: require('@/assets/image4.webp'),
          alt: 'Pantalon 4',
          title: 'Pantalon 4',
          description: 'Description du pantalon 4'
        },
        { 
          src: require('@/assets/image5.webp'),
          alt: 'Pantalon 5',
          title: 'Pantalon 5',
          description: 'Description du pantalon 5'

        },
        {
          src: require('@/assets/image6.jpg'),
          alt: 'Pantalon 6',
          title: 'Pantalon 6',
          description: 'Description du pantalon 6'
        },
        {
          src: require('@/assets/image7.webp'),
          alt: 'Pantalon 7',
          title: 'Pantalon 7',
          description: 'Description du pantalon 7'
        }
      ]
    };
  }
};
</script>

<style scoped>
.home-info {
  text-align: center;
  padding: 20px;
}
.phrase-container {
  text-align: center; /* Centrer le texte horizontalement */
  margin: 30px 0; /* Marge verticale pour espacer la phrase des autres éléments */
  padding: 20px; /* Rembourrage autour du texte */
  background-color: #ebad86; /* Couleur de fond légèrement gris clair */
  border: 2px solid #e59c78; /* Bordure bleue pour mettre en valeur la phrase */
  border-radius: 10px; /* Coins arrondis pour un effet plus doux */
}

.phrase-container h1 {
  color: #d3400ac7; /* Couleur du texte bleue pour correspondre à la bordure */
  font-size: 2.9em; /* Taille de la police, assez grande pour être accrocheuse */
  font-weight: bold; /* Texte en gras pour plus de visibilité */
  margin: 0; /* Supprimer la marge par défaut du <h1> */
  padding: 0; /* Supprimer le rembourrage par défaut du <h1> */
    font-family: Georgia, 'Times New Roman', Times, serif;
}


.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.image-card {
  border-radius: 10px;
  overflow: hidden;
  width: 250px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.image-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-card-img {
  width: 200%;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.image-card-content {
  padding: 10px;
}

.image-card-content h3 {
  font-size: 18px;
  margin: 10px 0;
}

.image-card-content p {
  font-size: 14px;
  color: #666;
}
</style>