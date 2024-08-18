<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <h2>
     <p>
      Top Sélection
      <!--<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.   --> 
    </p>
  </h2>
    <!--
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Tous nous produits</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">ProductList</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Nouveautés de 0 à 14 ans</a></li>
      <li><a href="http://127.0.0.1:5501/" target="_blank" rel="noopener">Bebé de 0 à 36 mois</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Fille de 2 à 14 ans </a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    -->

    <div class="image-gallery">
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image1.jpg" alt="Pantalon 1" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 1</p>
        </div>
      </div>
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image2.jpeg" alt="Pantalon 2" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 2</p>
        </div>
      </div>
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image3.webp" alt="Pantalon 3" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 3</p>
        </div>
      </div>
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image4.webp" alt="Pantalon 4" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 4</p>
        </div>
      </div>
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image5.webp" alt="Pantalon 5" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 5</p>
        </div>
      </div>
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image6.jpg" alt="Pantalon 6" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 6</p>
        </div>
      </div>
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image4.webp" alt="Pantalon 7" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 7</p>
        </div>
      </div>
      <div class="gallery-item">
        <div class="gallery">
            <img src="@/assets/image4.webp" alt="Pantalon 8" class="gallery-image">
        </div>
        <div class="description">
          <p>Pantalon 8</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
  font-size: 300%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: rgb(220, 195, 244);
}
h2 p {
  margin-bottom: 20px; /* Espacement ajouté entre le titre et la galerie */
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-size: 1.2em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 0;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.gallery-item {
  flex-basis: calc(25% - 20px);
  box-sizing: border-box;
  text-align: center;
}

.gallery {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.gallery-image {
  width: 90%;
  height: 240px;
  object-fit: cover;
}

.description {
  padding: 10% 0;
}
</style>