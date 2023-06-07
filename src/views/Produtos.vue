<template>
  <h1><strong>Produtos</strong></h1>
  <div class="row">
    <div class="col col-12 col-md-3" v-for="(produto, index) in produtos" :key="index">
      <ProdutosCard :data="produto" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProdutoStore } from '../stores/produto.js'
import ProdutosCard from '../components/card/ProdutosCard.vue'

const store = useProdutoStore()

const produtos = computed(() => {
  return store.getProdutos
})
</script>

<style scoped>
.col {
  margin-bottom: 1.2rem;
}
</style>
