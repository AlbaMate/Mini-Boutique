<template>
    <div class="home">
      <h1>Bienvenue sur la page d'accueil</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  };
  </script>
  
  <style scoped>
  /* Assure que le titre est en haut de la page sous la navbar */
  .home {
    margin: 0; /* Élimine les marges du conteneur */
    padding: 0; /* Élimine les espaces de remplissage */
    padding-top: 60px; /* Ajuste en fonction de la hauteur de la navbar */
    height: calc(100vh - 60px); /* Utilise la hauteur de la fenêtre moins la hauteur de la navbar */
    box-sizing: border-box; /* Assure que le padding est inclus dans la hauteur totale */
  }
  
  h1 {
    margin: 0; /* Élimine les marges autour du titre */
    font-size: 2em; /* Ajuste la taille de la police si nécessaire */
  }
  </style>
  