<template>
    <div class="cart-page">
      <h1>Votre Panier</h1>
      <div v-if="cart.length > 0">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <p>{{ item.name }} x {{ item.quantity }} - {{ item.price * item.quantity }} $</p>
          <button @click="removeFromCart(item.id)">Supprimer</button>
        </div>
        <div class="cart-total">
          <p>Total: {{ cartTotal }} $</p>
        </div>
      </div>
      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [
          { id: 1, name: 'Produit 1', price: 10, quantity: 2 },
          { id: 2, name: 'Produit 2', price: 15, quantity: 1 },
        ],
      };
    },
    computed: {
      cartTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-page {
    width: 80%;
    margin: 0 auto;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .cart-total {
    font-size: 1.2em;
    margin-top: 20px;
  }
  </style>
  