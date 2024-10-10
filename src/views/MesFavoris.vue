<template>
    <div class="phrase-container">
      <h1>Mes Favoris</h1>
    </div>
    <div class="bloc-modale">
      <div class="overlay"></div>
      <div class="modal card">
        <div class="btn-modal btn btn-danger"></div>

      <div class="favorite-gallery">
        <ImageCard
          v-for="(image, index) in favoriteImages"
          :key="index"
          :imageSrc="image.src"
          :altText="image.alt"
          :title="image.title"
          :description="image.description"
        />
      </div>
    </div>
    </div>

  </template>
  
  <script>
  import ImageCard from '@/components/ImageCard.vue';
  
  export default {
    name: 'MesFavoris',
    components: {
      imageCard: ImageCard
    },
    props: {
    images: {
      type: Array,
      required: true
    }
},
    computed: {
      favoriteImages() {
        // Récupère les images favorites depuis le tableau global des images
        return this.$parent.images.filter(image => image.isFavorite);
      }
    }
  };
  </script>
  
  <style scoped>
  
  .bloc-modale{
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
     
  }
  .overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .modale{
    background: whitesmoke;
    color: rgb(72, 70, 70);
    padding: 50px;
    position: fixed;
    top: 30%;
  }
  .btn-modale{
    position: absolute;
    top: 10%;
    right: 10%;
  }

  </style>
  