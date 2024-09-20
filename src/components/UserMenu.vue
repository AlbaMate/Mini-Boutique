<template>
  <div class="user-menu">
    <ul v-if="isDropdownOpen" class="user-dropdown">
      <li class="dropdown-item">
        <router-link to="/profile">Mon Profil</router-link>
      </li>
      <li>
        <router-link to="/settings">Paramètres</router-link>
      </li>
      <li>
        <router-link to="/logout">Déconnexion</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.user-dropdown {
  position: absolute;
  right: 0;
  background-color: #444;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #333;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.user-dropdown li {
  padding: 10px;
}

.user-dropdown li a {
  color: white;
  text-decoration: none;
}

.user-dropdown li a:hover {
  background-color: #555;
}
</style>
