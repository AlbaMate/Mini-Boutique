<template>
  <div class="catalogue">
    <h1>Catalogue</h1>
    <div class="categories">
      <router-link to="/catalogue/VêtementFille" class="category">
        <h2>Vêtements de Fille</h2>
        <p>Découvrez notre sélection de vêtements pour filles.</p>
      </router-link>
      <router-link to="/catalogue/VêtementGarcons" class="category">
        <h2>Vêtements de Garçon</h2>
        <p>Explorez notre gamme de vêtements pour garçons.</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogueViews',
};
</script>

<style scoped>
.catalogue {
  padding: 20px;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.category {
  text-decoration: none;
  color: inherit;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category:hover {
  background-color: #e0e0e0;
}

.category h2 {
  margin: 0;
}
</style>
