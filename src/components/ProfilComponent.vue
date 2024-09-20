<template> 
  <div class="profile">
    <h1>Profil</h1>

    <!-- Section Commandes -->
    <h2>Commandes</h2>
    <p>Consultez vos commandes.</p>
    <p>Gérez vos abonnements.</p>

    <!-- Section Centre de messagerie -->
    <h2>Centre de messagerie</h2>
    <p>Messages.</p>
    <p>Préférences de communication.</p>

    <!-- Section Service Client -->
    <h2>Service Client</h2>
    <p>Nous contacter.</p>

    <!-- Section Paramètres du compte -->
    <h2>Paramètres du compte</h2>
    <ul>
      <li><a href="/creer-compte">Créez votre compte professionnel gratuit</a></li>
      <li><a href="/changer-email">Changez votre email, mobile et mot de passe</a></li>
      <li><a href="/gerer-paiements">Gérez vos paiements et adresses</a></li>
      <li><a href="/gerer-piece-identite">Gérez la pièce d'identité enregistrée</a></li>
      <li><a href="/gerer-cartes-cadeaux">Gérez votre solde de cartes cadeaux</a></li>
      <li><a href="/recharger-compte">Rechargez votre compte</a></li>
    </ul>

    <!-- Section pour les informations personnelles -->
    <div class="personal-info">
      <label for="name">Nom :</label>
      <input type="text" id="name" v-model="name" />

      <label for="email">Adresse e-mail :</label>
      <input type="email" id="email" v-model="email" />

      <label for="phone">Numéro de téléphone :</label>
      <input type="text" id="phone" v-model="phone" />
    </div>

    <!-- Bouton pour sauvegarder les informations -->
    <button @click="saveProfile">Sauvegarder le profil</button>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    saveProfile() {
      alert('Profil sauvegardé !');
      console.log('Nom:', this.name);
      console.log('Email:', this.email);
      console.log('Téléphone:', this.phone);
    },
  },
};
</script>

<style scoped>
/* Styles de la page de profil */
.profile {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Réduit l'espacement entre les éléments */
  max-width: 600px;
  margin: auto; /* Centre la div */
}

.personal-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
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
  background-color: #2980b9;
}

ul {
  padding: 0; /* Enlève le padding par défaut */
}

ul li {
  margin: 5px 0; /* Ajoute un petit espace entre les éléments de la liste */
}

ul li a {
  text-decoration: none; /* Supprime le soulignement */
  color: #3498db; /* Couleur par défaut des liens */
}

ul li a:hover {
  color: #2980b9; /* Couleur au survol */
}
</style>
