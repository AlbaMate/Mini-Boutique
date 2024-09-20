<template>
  <header>
    <nav class="navbar">
      <form class="search-form">
        <input type="text" placeholder="Search" />
      </form>
      <ul class="nav-list">
        <!-- <li class="nav-item">
          <a href="@/VetementsFille.vue">Accueil</a>
        </li> -->
        <li class="nav-item" @click="toggleDropdown">
          <a href="#" class="catalogue-link">Catalogue</a>
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
      <ul class="navbar-icons">
        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
        <li><a href="#"><i class="fas fa-heart"></i></a></li>
        <li><a href="#"><i class="fas fa-user"></i></a></li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  name: "HeaderNavbar",
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

<style scoped>
/* Style du header */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color:  #ebad86; /* Couleur de fond de la navbar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optionnel, pour ajouter une ombre */
  z-index: 1000; /* Assure que la navbar est au-dessus des autres éléments */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px; /* Ajustez les paddings selon vos besoins */
}
.fas {
  color: #ea8989; /* La même couleur que pour les autres éléments */
}

/* Style de la navbar */
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Style de la liste de navigation */
.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Style des éléments de la liste de navigation */
.nav-item {
  position: relative;
  margin-right: 20px;
}

.nav-item a {
  text-decoration: none;
  color: #333;
}

/* Style pour le menu déroulant */
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
  color:brown;
}

/* Affiche le menu déroulant lorsque la classe est active */
.nav-item:hover .dropdown {
  display: block;
}

/* Style des icônes de la navbar */
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
  font-size: 24px; /* Ajuste la taille des icônes selon tes besoins */
}

/* Style du formulaire de recherche */
.search-form {
  margin-right: auto; /* Assure que le formulaire est aligné à gauche */
}

.search-form input {
  padding: 10px; /* Ajoute un padding intérieur pour améliorer l'apparence */
  font-size: 16px; /* Ajuste la taille de la police pour que le texte soit plus grand */
  border: 1px solid #ddd; /* Ajoute une bordure légère */
  border-radius: 5px; /* Ajoute des coins arrondis */
  width: 300px; /* Ajuste la largeur du champ de recherche */
}
</style>
