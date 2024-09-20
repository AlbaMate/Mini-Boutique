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
              <router-link to="/ProfilUser">Profil</router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/SettingUser">Paramètres</router-link>
            </li>
            <li class="dropdown-item">
              <router-link to="/PanierUser">Déconnexion</router-link>
            </li>
          </ul>
        </li>
        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
        <li><a href="#"><i class="fas fa-heart"></i></a></li>
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
      isUserMenuOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
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
    handleClickOutside(event) {
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
</style>
