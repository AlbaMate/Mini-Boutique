<template>
  <div id="app">
    <Navbar />
    <img alt="Vue vêtement" src="./assets/pret-a-porter-accueil-2.jpg">
    <HelloWorld msg="Bienvenue à notre boutique Douce Etoile"/>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar
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
  margin: 0; /* Supprime le margin top par défaut */
}

h1 {
  font-size: 500%;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

img {
  width: 100%;
  height: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding-top: 60px; /* Ajuste en fonction de la hauteur de la navbar */
}


.Navbar {
  position: fixed; /* Fixe la navbar en haut */
  top: 0;
  left: 0;
  width: 100%; /* S'assure que la navbar prend toute la largeur */
  z-index: 1000; /* Assure que la navbar est au-dessus des autres éléments */
  background-color: #d8ab74;
}
</style>
