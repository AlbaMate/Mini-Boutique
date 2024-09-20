
<template>
   <h1>Bienvenue à notre boutique Douce Etoile</h1>
 
    <HeaderNavbar />
    <router-view />
 
</template>

<script>
import HeaderNavbar from './components/HeaderNavbar.vue';

export default {
  name: 'App',
  components: {
    HeaderNavbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #893f0e;
  margin: 0;
  padding-top: 60px; /* Ajuste en fonction de la hauteur de la navbar */
}
h1{
  font-size: 350%;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.main-image {
  width: 100%; /* Vous pouvez ajuster selon vos besoins */
  height: auto; /* Conserve le ratio d'aspect de l'image */
  max-width: 1300px; /* Limite la largeur maximale de l'image */
  object-fit: cover; /* Assure que l'image couvre l'espace disponible */
}
</style>
