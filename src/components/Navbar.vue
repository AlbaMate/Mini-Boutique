<template>
  <nav class="navbar">
    <ul class="left-menu">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/CatalogueMenu">Catalogue</router-link></li>
      <!--<li><router-link to="/contact">Contact</router-link></li> -->
    </ul>
    <ul class="right-menu" id="icons">
      <li>
        <router-link to="/favorites">
          <i class="fas fa-heart"></i> <!-- Icône des favoris -->
        </router-link>
      </li>
      <li>
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i> <!-- Icône du panier -->
        </router-link>
      </li>
      <li>
        <user-menu></user-menu> <!-- Composant UserMenu avec le menu déroulant -->
      </li>
    </ul>
  </nav>
</template>

<script>
import UserMenu from './UserMenu.vue'; // Importation du composant UserMenu

export default {
  name: "NavbarComponent",
  components: {
    UserMenu // Déclaration du composant UserMenu
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1.7em 3em; /* Augmentez le padding pour rendre la barre plus épaisse */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; /* Assure que le padding et la largeur sont inclus dans la largeur totale */
  
  /* Propriétés pour rendre la navbar fixe */
  position: fixed; /* Fixe la barre de navigation */
  top: 0; /* Positionne la barre en haut de la page */
  left: 0; /* Aligne la barre avec le bord gauche */
  width: 100%; /* S'assure que la barre prend toute la largeur de la page */
  z-index: 1000; /* Assure que la barre de navigation est au-dessus des autres éléments */
}

body {
  margin: 0; /* Supprime la marge par défaut du corps pour éviter des espaces non désirés */
  padding-top: 60px; /* Ajustez cette valeur pour correspondre à la hauteur de la barre de navigation */
}

.navbar ul {
  list-style: none; /* Supprime les puces des listes */
  padding: 0;
  margin: 0;
  display: flex;
}

.navbar ul.left-menu {
  flex: 1;
  justify-content: flex-start; /* Aligne les éléments du côté gauche à gauche */
}

.navbar ul.right-menu {
  display: flex;
  gap: 20px; /* Espacement entre les icônes */
}

.navbar ul li {
  margin-right: 20px;
}

.navbar ul li:last-child {
right: 40%; /* Supprime le margin-right du dernier élément pour éviter un espace superflu */
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.navbar ul li a:hover {
  text-decoration: underline;
}

#icons i {
  font-size: 1.8em;
  color: white;
}
</style>