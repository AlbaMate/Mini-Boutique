<template>
  <div class="settings">
    <h1>Paramètres</h1>

    <div class="account-info">
      <h2>Informations du Compte</h2>
      <label for="email">Adresse e-mail:</label>
      <input type="email" id="email" v-model="email" />
      
      <label for="password">Mot de passe:</label>
      <input type="password" id="password" v-model="password" />
      
      <button @click="updateAccount">Mettre à jour</button>
    </div>

    <div class="preferences">
      <h2>Préférences</h2>
      <label for="language">Langue:</label>
      <select id="language" v-model="language">
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
        <option value="es">Espagnol</option>
      </select>
      
      <label for="theme">Thème:</label>
      <select id="theme" v-model="theme">
        <option value="light">Clair</option>
        <option value="dark">Sombre</option>
      </select>
    </div>

    <div class="notifications">
     <!-- Autorisations -->
    <div class="authorizations">
      <h2>Autorisations</h2>
      <a href="#" class="auth-link">
        <i class=""></i> Voir les autorisations
      </a>
    </div>
      <h2>Notifications</h2>
      <label>
        <input type="checkbox" v-model="notificationsEnabled" />
        Activer les notifications
      </label>
    </div>

    <div class="save-button-container">
      <button class="save-button" @click="saveSettings">Sauvegarder les paramètres</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsComponent',
  data() {
    return {
      email: '',
      password: '',
      language: 'fr',
      theme: 'light',
      notificationsEnabled: false,
    };
  },
  methods: {
    updateAccount() {
      // Logique pour mettre à jour le compte
    },
    saveSettings() {
      // Logique pour sauvegarder les paramètres
    },
  },
};
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column; /* Aligne tous les éléments en colonne */
  gap: 15px; /* Espace entre chaque champ */
  max-width: 400px; /* Limite la largeur du formulaire */
  margin: auto; /* Centre le formulaire sur la page */
}

label {
  font-weight: bold;
  margin-top: 10px; /* Espace avant chaque label */
}

input[type="email"],
input[type="password"],
select {
  width: 100%; /* Chaque champ prend toute la largeur disponible */
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box; /* Assure que padding ne dépasse pas la largeur */
}

button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9; /* Couleur plus foncée au survol */
}
</style>