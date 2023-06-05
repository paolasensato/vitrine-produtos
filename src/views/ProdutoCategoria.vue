<template>
  <div class="row">
    <div class="col col-12 col-md-3" v-for="(produto, index) in produtos" :key="index">
      <ProdutosCard :data="produto" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCategoriaStore } from '../stores/categoria'
import { useRoute } from 'vue-router'
import ProdutosCard from '../components/card/ProdutosCard.vue'

const route = useRoute()
const store = useCategoriaStore()

const produtos = computed(() => {
  return store.getProdutosCategorias
})

onMounted(() => {
  store.fetchProdutosCategoria(route.params.id)
})
</script>
