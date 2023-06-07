<template>
  <MenuNav />
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>

<script setup>
import MenuNav from './components/MenuNav.vue'
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useCategoriaStore } from './stores/categoria'
import { useProdutoStore } from './stores/produto'
import Footer from './components/Footer.vue'

onMounted(() => {
  useCategoriaStore().fetchCategorias()
  useProdutoStore().fetchProdutos()
})
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
}

#app,
html {
  background-color: #ffeef0;
}

.container {
  margin-top: 6rem;
}
</style>
