<template>
    <div class="navbar-user" @click="toggleUserMenu" ref="userMenu">
      <i class="fas fa-user"></i> <!-- Icône de l'utilisateur -->
      <ul v-if="userMenuVisible" class="user-dropdown">
        <li><a href="#">Profil</a></li>
        <li><a href="#">Paramètres</a></li>
        <li><a href="#">Déconnexion</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userMenuVisible: false,
      };
    },
    methods: {
      toggleUserMenu() {
        this.userMenuVisible = !this.userMenuVisible;
      },
      handleOutsideClick(event) {
        const userMenu = this.$refs.userMenu;
        if (userMenu && !userMenu.contains(event.target)) {
          this.userMenuVisible = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {  // Changement ici
      document.removeEventListener('click', this.handleOutsideClick);
    }
  };
  </script>
  
  <style scoped>
  .navbar-user {
    position: relative;
    cursor: pointer;
  }
  
  .user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    color: #333;
    list-style: none;
    padding: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    min-width: 150px;
  }
  
  .user-dropdown li {
    padding: 10px 20px;
  }
  
  .user-dropdown li a {
    color: #333;
    text-decoration: none;
  }
  
  .user-dropdown li:hover {
    background-color: #f0f0f0;
  }
  
  .fas.fa-user {
    font-size: 1.5em;
    color: #fff;
  }
  </style>
  