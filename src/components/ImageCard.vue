<template>
  <div class="image-card">
    <img :src="imageSrc" :alt="altText" class="image-card-img" />
    <div class="image-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.image-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.image-card-img {
  width: 100%;
  height: auto;
}

.image-card-content {
  padding: 10px;
}
</style>
