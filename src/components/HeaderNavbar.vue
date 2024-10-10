<template>
  <header>
    <nav class="navbar">
      <form class="search-form">
        <input type="text" placeholder="Search" />
      </form>
      <ul class="nav-list">
        <!-- Menu "Catalogue" -->
        <li class="nav-item">
          <a href="#" class="catalogue-link" @click.prevent="toggleDropdown">Catalogue</a>
          <ul v-if="isDropdownOpen" class="dropdown">
            <li class="dropdown-item">
              <router-link to="/VetementsFille">Vêtement de Fille</router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/VetementsGarcon">Vêtement de Garçon</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Menu utilisateur -->
      <ul class="navbar-icons">
        <li class="nav-item">
          <a href="#" class="user-link" @click.prevent="toggleUserMenu">
            <i class="fas fa-user"></i>
          </a>
          <ul v-if="isUserMenuOpen" class="dropdown">
            <li class="dropdown-item">
              <router-link to="/ProfilComponent">Profil</router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/SettingsComponent">Settings</router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/PanierUser">Logout</router-link>
            </li>
          </ul>
        </li>
        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>


        <a href="#" class="favorite-link" @click.prevent="toggleFavoriteModal">
        <i class="fas fa-heart"></i>
      </a>
      </ul>
<!-- Fenêtre modale des favoris -->
<div v-if="isFavoriteModalOpen" class="favorite-modal-overlay">
      <div class="modal-overlay">
        <div class="modal-header">
          <h2>Mes Favoris</h2>
          <button class="close-modal" @click="toggleFavoriteModal">X</button>
        </div>
        <div class="modal-body">
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
          <p>Aucun favori pour l'instant !</p>
          <!-- Exemple : <ImageCard v-for="favorite in favorites" :key="favorite.id" :imageSrc="favorite.src" /> -->
        </div>
      </div>
     </div> 



   </nav>


  </header>
</template>

<script>
export default { // mon objet  qui contient les propriétés et méthodes
  name: "HeaderNavbar",
  data() {  //retourne un objet contenant les données réactives du composant.
    return {
      isDropdownOpen: false, //  indique que le menu déroulant (dropdown) est ouvert ou fermé.
      isUserMenuOpen: false, // indique si le menu utilisateur (user menu) est ouvert ou fermé.
      isFavoriteModalOpen: false, // Propriété pour gérer l'ouverture de la modale des favoris
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside); //Ici, on attache un écouteur d'événement click
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() { // Cette méthode gère l'ouverture et la fermeture du menu déroulant (dropdown)
      this.isDropdownOpen = !this.isDropdownOpen;
      if (this.isUserMenuOpen) {
        this.isUserMenuOpen = false;
      }
    },
    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false;
      }
    },
    toggleFavoriteModal() {
      // Gère l'ouverture et la fermeture de la fenêtre modale des favoris
      this.isFavoriteModalOpen = !this.isFavoriteModalOpen;
    },
    handleClickOutside(event) { //Cette méthode est exécutée lorsqu'un clic est effectué quelque part sur le document. Elle vérifie si l'utilisateur a cliqué en dehors des éléments du menu (dropdown ou user menu) et ferme les menus s'ils sont ouverts
      const userMenu = this.$el.querySelector(".user-menu");
      const dropdown = this.$el.querySelector(".dropdown");
      if (
        this.isUserMenuOpen &&
        userMenu &&
        !userMenu.contains(event.target) &&
        !this.$el.querySelector(".fa-user").contains(event.target)
      ) {
        this.isUserMenuOpen = false;
      }
      if (
        this.isDropdownOpen &&
        dropdown &&
        !dropdown.contains(event.target) &&
        !this.$el.querySelector(".catalogue-link").contains(event.target)
      ) {
        this.isDropdownOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* Styles de base */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ebad86;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}
.fas {
  color: #ea8989;
}

.navbar {
  display: flex;
  align-items: center;
  width: 100%;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
  margin-right: 20px;
}

.nav-item a {
  text-decoration: none;
  color: #333;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  padding: 10px 20px;
}

.dropdown-item a {
  text-decoration: none;
  color: brown;
}

/* Affiche le menu dropdown lors du v-if */
.nav-item:hover .dropdown {
  display: block;
}

.navbar-icons {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-icons li {
  margin-left: 20px;
}

.navbar-icons .fas {
  font-size: 24px;
}

.search-form {
  margin-right: auto;
}

.search-form input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
}
.dropdown {
  position:absolute;
  display:inline-block;
}
/* Bouton pour déclencher le dropdown */
.dropdown-toggle {
  background-color: #3498db; /* Couleur de fond */
  color: white; /* Couleur du texte */
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

/* Style de base pour le menu déroulant */
.dropdown-menu {
  display: none; /* Masqué par défaut */
  position: absolute;
  background-color: #f8f8f8; /* Couleur de fond claire */
  min-width: 0px; /* Largeur minimale */
  max-height: 80px; /* Hauteur maximale */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Ombre pour effet de profondeur */
  z-index: 1;
  border-radius: 5px;
  padding: 10px 0;
  overflow-y: auto; /* Permet de scroller si le contenu dépasse la hauteur max */
  border: 1px solid #ddd; /* Bordure légère */
}

/* Liens dans le menu */
.dropdown-menu a, .dropdown-menu router-link {
  color: #333; /* Couleur du texte */
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease; /* Transition douce sur hover */
}

/* Couleur de fond au survol des éléments */
.dropdown-menu a:hover, .dropdown-menu router-link:hover {
  background-color: #3498db; /* Couleur bleue au hover */
  color: white; /* Couleur du texte au hover */
}

/* Style du menu quand il est ouvert */
.dropdown.open .dropdown-menu {
  display: block;
}
.favorite-modal-overlay{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fond transparent noir */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
     
  }
  .modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .modal-header{
    background: whitesmoke;
    color: rgb(72, 70, 70);
    padding: 50px;
    position: fixed;
    top: 30%;
  }
  .close-modal{
    position: absolute;
    top: 10%;
    right: 10%;
  }
</style>
